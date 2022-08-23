# dev-elas-programacao-web-2

## Expressões Regulares

### Metacaracteres
```
^          INICIO DA LINHA
$          FINAL DA LINHA
[]         LISTA PERMITIDA
[i-f]      LISTA INTERVALADA
\char      ESCAPE
()         GRUPO
|          OU
?          OPCIONAL
{n}        QUANTIFICADOR
{min,max}  QUANTIFICADOR INTERVALADO
+          REPETIDOR
.          QUALQUER COISA (CORINGA)


\s         ESPACO
\d         APENAS NUMEROS
\w         ALFANUMERICO
```

### Exemplos

```
CEP V1:   /^[0-9][0-9][0-9][0-9][0-9](\s|\-)?[0-9][0-9][0-9]$/
CEP V2:   /^[0-9]{5}(\-|\s)?[0-9]{3}$/
CEP V3:   /^\d{5}(\-|\s)?\d{3}$/

EMAIL V1: /^[A-z0-9\.\-]{1,}\@(\w{2,}\.)+[A-z]{2,}$/
```


