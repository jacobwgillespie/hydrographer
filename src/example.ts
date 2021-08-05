import util from 'util'
import {fn, parse, print, Release, Values} from '.'

/*
apiVersion: v1
kind: Service
metadata:
  name: {{ include "logs-ui.fullname" . }}
  labels:
    {{- include "logs-ui.labels" . | nindent 4 }}
  {{- if .Values.service.annotations }}
  annotations: {{- toYaml .Values.service.annotations | nindent 4 }}
  {{- end }}
spec:
  type: {{ .Values.service.type }}
  ports:
    - port: {{ .Values.service.port }}
      targetPort: http
      protocol: TCP
      name: http
  selector:
    {{- include "logs-ui.selectorLabels" . | nindent 4 }}
*/

async function run() {
  const fullname = Values.fullname.asString()
  const serviceType = Values.service.type.asString()
  const servicePort = Values.service.port.asNumber()

  const template = {
    apiVersion: 'v1',
    kind: 'Service',
    metadata: {
      name: fullname,
      namespace: Release.Namespace,
      labels: {},
      example: Values.example.value.asString(),
    },
    spec: {
      type: serviceType,
      ports: [
        {
          port: servicePort,
          targetPort: 'http',
          protocol: 'TCP',
          name: 'http',
        },
        fn
          .if(Values.isEnabled.asBoolean(), {
            enabled: true,
          })
          .elseIf(Values.otherwise.asBoolean(), {
            enabled: false,
          })
          .else(Values.something.asString()),
      ],
      selector: {},

      array: [],

      example: [['a'], ['b', 'c']],
    },
  }

  const ast = parse(template)
  console.log(util.formatWithOptions({colors: true, depth: 20}, ast))
  console.log()
  console.log(print(ast))
}

run().catch((err) => {
  console.error(err.stack)
  process.exit(1)
})
