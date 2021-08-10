import util from 'util'
import {fn, HelperExpression, parse, print, Release, Values} from '.'

async function run() {
  const fullname = Values.fullname.asString()
  const serviceType = Values.service.type.asString()
  const servicePort = Values.service.port.asNumber()

  // servicePort.set(8080)

  const commonPort = {
    port: servicePort,
    targetPort: 'http',
    protocol: 'TCP',
    name: 'http',
  }

  const conditionalPort = {
    port: servicePort,
    targetPort: 'http',
    protocol: 'TCP',
    name: 'http-conditional',
  }

  const selectorLabels = new HelperExpression(
    'object',
    'quarry.selectorLabels',
    parse({
      'app.kubernetes.io/instance': Release.Name,
    }),
  )

  const template = {
    apiVersion: 'v1',
    kind: 'Service',
    metadata: {
      name: fullname,
      namespace: Release.Namespace,
      labels: {},
    },
    example: Values.example.asArray(),
    spec: {
      type: serviceType,
      ports: fn.if(Values.isEnabled.asBoolean(), [commonPort]).else([commonPort, conditionalPort]),
      selector: selectorLabels,

      array: [],

      example: [['a'], ['b', 'c']],
    },
  }

  const data = {
    'Values.service.port': 8080,
    'Values.isEnabled': false,
  }

  const ast = parse(template)
  console.log(util.formatWithOptions({colors: true, depth: 20}, ast))
  console.log()
  console.log(print(ast, data))
}

run().catch((err) => {
  console.error(err.stack)
  process.exit(1)
})
