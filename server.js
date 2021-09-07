const express = require('express')
const passport = require('passport');
const { JWTStrategy } = require('@sap/xssec');
const xsenv = require('@sap/xsenv');

const port = process.env.PORT || 3000

const app = new express()

let routes = require('./routes')

passport.use(new JWTStrategy(xsenv.getServices({uaa:{tag:'xsuaa'}}).uaa));

app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));

var conn_params = {
    "host": "zeus.hana.prod.us-east-1.whitney.dbaas.ondemand.com",
    "port": "21022",
    "driver": "com.sap.db.jdbc.Driver",
    "url": "jdbc:sap://zeus.hana.prod.us-east-1.whitney.dbaas.ondemand.com:21022?encrypt=true&validateCertificate=true&currentschema=3DC1C3CA5C71473793EF3C66BEE22503",
    "schema": "3DC1C3CA5C71473793EF3C66BEE22503",
    "hdi_user": "3DC1C3CA5C71473793EF3C66BEE22503_22ZMT3MMILWHHX1F4LV0Q7CVS_DT",
    "hdi_password": "Hs5wU3GERjDLVlzuOT.XMLYhbI2T56QGjCdF3c0wCGmzG-YUAljxhnAyw-NkiPcvCFp625oe2AE4bWA05cXxpAFti3d4_j02iScY2g_gcgqXXlcvm7JHBCCf-sivImwq",
    "user": "3DC1C3CA5C71473793EF3C66BEE22503_22ZMT3MMILWHHX1F4LV0Q7CVS_RT",
    "password": "Vg7Bt74nKfxP6WC1aVdtae9KkByg8ss89uYNM-M9A.5nqjpv2wKjprzsRbkCMTcebKITbAWzW9DnzvqSHAtPko9wh9Ji9QaQSEY.oxnx.XbJALDXJ82Ps1pXsjp-Sb0Z",
    "certificate": "-----BEGIN CERTIFICATE-----\nMIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT\nMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j\nb20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB\nCSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97\nnh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt\n43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P\nT19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4\ngdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO\nBgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR\nTLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw\nDQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr\nhMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg\n06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF\nPnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls\nYSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk\nCAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=\n-----END CERTIFICATE-----\n",
    "serverNode" : "zeus.hana.prod.us-east-1.whitney.dbaas.ondemand.com:21022?encrypt=true&validateCertificate=true&currentschema=3DC1C3CA5C71473793EF3C66BEE22503"
  }
app.use('/',routes())

app.listen(port,()=>{
    console.log(`App is running in http://localhost:${port}`)
});