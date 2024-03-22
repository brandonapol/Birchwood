{{/*
This will create a default domain for me locally if not overwritten in common values scope
Will use the provided value from common-values, otherwise go to default
*/}}
{{- define "birchwood-templates.clusterTLD" -}}
{{- if ne .Values.clusterTLD "" -}}
    {{- .Values.clusterTLD -}}
{{- else -}}
    {{- "k8s.birchwood.com" -}}
{{- end -}}
{{- end -}}