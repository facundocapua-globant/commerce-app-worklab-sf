# Banner Card Block

## Overview

The Banner Card block is a **placeholder** content block reserved for a future banner/card layout. It currently has no behavior beyond tagging its authored rows with semantic classes - visual design and interactivity are intentionally not implemented yet.

## Integration

### Block Configuration

This block does not require any configuration parameters. Content is defined directly in the block structure.

### Block Structure

The block expects four rows, one field per row:

1. Image
2. Title
3. Description
4. Link

Example authoring structure:

```
| Banner Card |
|--------------|
| ![Banner](image.jpg) |
| Title text |
| Description text |
| [Link label](https://example.com) |
```

### Fields (Universal Editor / Document Authoring)

Defined in `_banner-card.json`:

| Field | Component | Description |
|-------|-----------|--------------|
| `image` | reference | Banner image |
| `imageAlt` | text | Image alt text |
| `title` | text | Card title |
| `description` | richtext | Card description |
| `linkHref` | text | Link URL |
| `linkText` | text | Link label |

## Behavior Patterns

### Visual Structure

Not yet implemented. The block currently only applies `banner-card-image`, `banner-card-title`, `banner-card-description`, and `banner-card-link` classes to its rows for future styling.

### Error Handling

- **Missing rows**: Each row is optional; the decorator uses optional chaining and skips classes for rows that are absent.
