# Soluti0n/Icons

A comprehensive collection of React icon components built with TypeScript and SVG. This package provides a consistent and customizable icon system for React applications.

## Installation

```bash
npm install @soluti0n/icons
# or
yarn add @soluti0n/icons
```

## Features

- **TypeScript Support**: Fully typed components with proper IntelliSense
- **Customizable**: Control size, color, stroke width, and more
- **SVG-based**: Crisp, scalable vector icons
- **Flexible Styling**: Support for CSS classes and inline styles
- **Accessible**: Proper ARIA attributes and keyboard support
- **Tree-shakable**: Only import what you use

## Quick Start

```tsx
import { FilterIcon, FilterListIcon, FilterAltIcon } from '@soluti0n/icons';

function App() {
  return (
    <div>
      <FilterIcon size={24} color="#333" />
      <FilterListIcon size={32} color="blue" />
      <FilterAltIcon size={48} color="red" filled />
    </div>
  );
}
```

## Icon Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`size\` | \`number\` | \`24\` | Icon size in pixels |
| \`color\` | \`string\` | \`'currentColor'\` | Icon color |
| \`className\` | \`string\` | \`''\` | Additional CSS class |
| \`onClick\` | \`() => void\` | \`undefined\` | Click handler |
| \`backgroundColor\` | \`string\` | \`undefined\` | Background color |
| \`strokeWidth\` | \`number\` | \`1.5\` | Stroke width for outline icons |
| \`filled\` | \`boolean\` | \`false\` | Use filled variant |

## Available Icons

### Filter Icons (50+ Components)

- **Basic Filters**: \`FilterIcon\`, \`FilterListIcon\`, \`FilterAltIcon\`
- **Numerical Filters**: \`Filter1Icon\` to \`Filter9Icon\`, \`Filter9PlusIcon\`
- **Visual Filters**: \`FilterBAndWIcon\`, \`FilterHdrIcon\`, \`FilterVintageIcon\`
- **Effect Filters**: \`FilterBlurIcon\`, \`FilterBlurCircularIcon\`, \`FilterBlurLinearIcon\`
- **Brightness Filters**: \`FilterBrightnessIcon\`, \`FilterBrightnessHighIcon\`, \`FilterBrightnessLowIcon\`
- **Specialized Filters**: \`FilterCenterFocusIcon\`, \`FilterDramaIcon\`, \`FilterFramesIcon\`, \`FilterTiltShiftIcon\`

## Usage Examples

### Basic Usage
```tsx
import { FilterIcon } from '@soluti0n/icons';

<FilterIcon />
<FilterIcon size={32} />
<FilterIcon color="#ff0000" />
```

### With Custom Styling
```tsx
<FilterIcon 
  size={40}
  color="white"
  backgroundColor="#007bff"
  className="my-icon-class"
  onClick={() => console.log('Icon clicked')}
/>
```

### Filled vs Outline Variants
```tsx
<FilterIcon filled={true} />      {/* Filled version */}
<FilterIcon filled={false} />     {/* Outline version */}
<FilterIcon />                    {/* Default: outline */}
```

### Custom Stroke Width
```tsx
<FilterIcon strokeWidth={2} />    {/* Thicker stroke */}
<FilterIcon strokeWidth={0.5} />  {/* Thinner stroke */}
```

## Advanced Usage

### Dynamic Icon Selection
```tsx
import * as Icons from '@soluti0n/icons';

const iconMap = {
  filter: Icons.FilterIcon,
  list: Icons.FilterListIcon,
  alt: Icons.FilterAltIcon,
};

function DynamicIcon({ name, ...props }) {
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent {...props} /> : null;
}
```

### With CSS-in-JS
```tsx
import styled from 'styled-components';
import { FilterIcon } from '@soluti0n/icons';

const StyledIcon = styled(FilterIcon)\`
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    color: #007bff;
  }
\`;
```

## Performance Tips

1. **Import Specific Icons**: Use named imports to enable tree-shaking
   \`\`\`tsx
   import { FilterIcon } from '@soluti0n/icons'; // ✅ Good
   import * as Icons from '@soluti0n/icons';     // ❌ Avoid
   \`\`\`

2. **Memoize Icons**: Use \`React.memo\` for frequently re-rendered icons
   \`\`\`tsx
   const MemoizedIcon = React.memo(FilterIcon);
   \`\`\`

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and changes.

## Support

- Create an [issue](https://github.com/soluti0n/icons/issues) for bug reports
- Check [discussions](https://github.com/soluti0n/icons/discussions) for questions
- Review [examples](examples/) for usage patterns
