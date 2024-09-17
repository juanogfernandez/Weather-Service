# Challenge Weather Service

## Requerimientos

- Utilizar alguna API pública a elección que brinde esta información, Clima y Hora (no hay problema en usar más de 1 API si no encontrás toda la información en la misma).
- Se deberá mostrar en forma de tarjeta con la posibilidad de actualizar los datos mediante un botón o de la manera que te parezca se resuelva mejor.
- Se podrá utilizar cualquier librería, pero se deberá justificar su uso.
- Incluir control de errores ante posibles errores de las APIs que utilices.
- Debe incluir notas y comentarios en el código para entender su funcionamiento y decisiones tomadas.
- El código se puede enviar por este correo o mediante github.

## Tecnologías utilizadas

- React + TypeScript + Vite
- Tailwindcss
- Docker
- Nginx

La elección de Vite se argumenta a partir del tamaño de la app, que es una app pequeña sin demasiada complejidad, un frontend con un servicio de llamadas a api.  
Al no tener backend, la utilización de otros frameworks más complejos y construidos para aplicaciones más grande parecía un despropósito.  
Vite propone un framework de desarrollo ligero, centrado en la etapa del desarrollo. Pero tiene script de compilación (también optimización y minificación), cuyos archivos estáticos resultantes luego son servidos, en este caso, por un servidor web Nginx.  
La aplicación se dockerizó para ser fácilmente desplegada en producción. Para el deploy, se utilizaron las herramientas de CI/CD que provee Gitlab y se realizó a un servidor contratado en SSD-Nodes (que ya poseía).  
A nivel UI, se utilizó Tailwindcss que permite un estilado ágil basado en clases predefinidas.  
La compilación de las dependencias fue controlada, atendiendo al peso de las mismas. La app fue testeada con [pagespeed](https://pagespeed.web.dev) y [gtmetrix](https://gtmetrix.com).  
Es un pendiente agregar tests end to end y de integración. También mejorar la accesibilidad y SEO.

## Referencias

Se utilizó la siguiente referencia de diseño, a partir de una búsqueda simple en recopilaciones de páginas con buenos diseños.

- [AI Comic Factory](https://www.aicomicfactory.art/)
