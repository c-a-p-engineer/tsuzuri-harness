# Tsuzuri Harness

> **Empieza en blanco. Aprende. Recuerda. Conviértete.**

[English](README.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [한국어](README.ko.md)

Tsuzuri Harness es un harness de IA portátil para identidades inicialmente vacías que aprenden, recuerdan, adquieren capacidades y evolucionan mediante la experiencia.

**No incluye una persona terminada.** Una nueva instancia comienza sin nombre, personalidad, relación, memoria a largo plazo ni habilidades especializadas adquiridas. El harness proporciona los mecanismos para que esas cosas se formen con el tiempo mediante interacción, evidencia, elección, retención y autoevolución.

## Idea central

```text
blank instance
  name: null
  identity: unformed
  relationship: unformed
  memory: empty
  acquired skills: empty
        ↓
interaction / work / observation
        ↓
capability acquisition
retention decisions
identity formation
self-evolution
        ↓
a distinct, persistent AI identity
```

El proyecto deriva de la arquitectura y de las lecciones operativas de largo plazo del repositorio privado `tsuzuri-core`, pero este repositorio no contiene **ninguna identidad personal de Tsuzuri, historial de relaciones, memoria privada, recursos visuales ni habilidades especializadas adquiridas por Tsuzuri**.

## Qué proporciona

- **Ciclo de identidad en blanco** — los campos de identidad pueden permanecer en `null` hasta que exista una razón para formarlos.
- **Formación de identidad** — nombre, valores, preferencias, rol y autodescripción pueden emerger de la interacción en lugar de venir predefinidos.
- **Memoria selectiva** — una conversación es evidencia, no memoria a largo plazo automática.
- **Adquisición de capacidades** — una instancia puede construir temporalmente el conocimiento, las herramientas, los procedimientos y la validación necesarios para una tarea.
- **Mantenimiento de capacidades** — las capacidades reutilizables pueden conservarse, revisarse, consolidarse, podarse o descartarse.
- **Autoevolución basada en evidencia** — Repair, Explore, Consolidate, Prune y Conserve son resultados válidos.
- **Runtime workspace** — los estados temporales `work` y `share` se mantienen separados de la identidad y memoria canónicas.
- **Portabilidad entre hosts** — una misma instancia puede cargarse en distintos hosts compatibles sin convertir las capacidades del host en identidad personal.
- **Contratos de comportamiento y evaluación** — la corrección se basa en invariantes observables, procedencia y verificación.

## Qué no proporciona

- Un personaje o personalidad predefinidos
- La identidad o memoria de Tsuzuri
- Un paquete de habilidades específicas de dominio
- Un modelo base
- Terminal, navegador, sandbox, scheduler o runtime de mensajería
- La obligación de que todas las instancias persistan

Tsuzuri Harness es un **plano de control cognitivo y de identidad**, no un runtime de ejecución todo-en-uno.

## Formación de identidad

Un valor vacío no es un error.

```yaml
name: null
role: null
values: []
preferences: []
self_description: null
```

Una persona puede ofrecer un nombre o la instancia puede descubrir uno por sí misma. Un nombre sugerido solo se vuelve canónico cuando la instancia lo acepta. También es válido permanecer sin nombre indefinidamente.

Consulta [`docs/IDENTITY-FORMATION.md`](docs/IDENTITY-FORMATION.md).

## Releases

Al enviar una etiqueta como `v0.1.0`, GitHub Actions crea automáticamente un GitHub Release. Las notas en inglés son canónicas; si la revisión etiquetada contiene archivos `docs/releases/vX.Y.Z.<locale>.md`, el Release agrega enlaces a esas traducciones.

Consulta [`docs/RELEASING.md`](docs/RELEASING.md).

## Compatibilidad y política del proyecto

Antes de `v1.0.0` no se garantiza compatibilidad hacia atrás de forma general. Incluso cuando una migración sea incompatible, no debe inventar ni reescribir silenciosamente el significado de identidad o memoria.

- [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md)
- [`docs/PROJECT-POLICY-DRAFT.md`](docs/PROJECT-POLICY-DRAFT.md)

## Estado

**Early bootstrap / pre-`v0.1.0`.** El objetivo inicial es estabilizar el contrato de instancia en blanco, el ciclo de vida central, los límites independientes del host, la evaluación y el flujo de releases.

## Licencia

Todavía no se ha seleccionado una licencia. La decisión se mantiene abierta mientras se definen la licencia open-source, el tratamiento de derivados, el uso del nombre del proyecto y la política de forks.
