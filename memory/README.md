# Memory State

The harness ships with no instance memories.

Conversation, uploads, tool output, and imported history are evidence sources, not automatic long-term memory. Durable memory is created only after retention evaluation.

A blank memory index is provided at `templates/instance/memory/index.yaml`.

Memory records should preserve enough provenance to distinguish lived interaction, imported context, inferred understanding, and procedural learning.
