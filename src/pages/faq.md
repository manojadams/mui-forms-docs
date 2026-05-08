# Frequently Asked Questions

### What is MuiForms?
MuiForms is a JSON-schema based form builder for React that uses Material-UI components. It allows you to define complex forms entirely through JSON schema without writing form HTML manually.

### How do I get started?
Check the [Getting Started →](/getting-started) guide or follow the [Installation →](/installation) instructions.

### Do I need to know Material-UI?
No, but it helps! MuiForms works with Material-UI components under the hood, but you interact with it through JSON schema.

### Can I use it with TypeScript?
Yes! Full TypeScript support is available. See [TypeScript Support →](/typescript-support).

---

## Schema & Configuration

### How do I define a form schema?
Create a JSON object with a `fields` array containing field definitions. Each field needs `name`, and `meta` with `displayName` and `displayType`.

```json
{
  "fields": [
    {
      "name": "email",
      "meta": {
        "displayName": "Email Address",
        "displayType": "email"
      }
    }
  ]
}
```

[Learn more →](/schema)

### How do I load a form using an API?
Fetch your schema from an API and pass it to MuiForms:

```typescript
const [schema, setSchema] = useState(null);

useEffect(() => {
  fetch('/api/forms/registration')
    .then(r => r.json())
    .then(data => setSchema(data));
}, []);

return schema ? <MuiForms schema={schema} onSubmit={handleSubmit} /> : null;
```

### What display types are available?
See the complete list in [Field Types →](/fields). Common types include: `text`, `email`, `number`, `select`, `checkbox`, `radio`, `date`, `file`, `textarea`, and more.

### How do I set default/initial values?
Use the `value` property in your field:

```json
{
  "name": "country",
  "meta": {
    "displayName": "Country",
    "displayType": "select",
    "value": "testCountryValue"
  }
}
```

---

## Validation

### How do I add validation?
Add a `validation` object to the field's `meta`:

```json
{
  "meta": {
    "validation": {
      "required": true,
      "min": 5,
      "max": 100
    }
  }
}
```
[Full validation guide →](/fields/field-validation)

### How do I validate email addresses?
Use the `email` displayType, which validates automatically. Or use a pattern in a text field:

```json
{
  "meta": {
    "displayType": "email",
    "validation": {
      "required": true
    }
  }
}
```

### How do I add custom validation?
Define a custom validator, pass it through the `validators` prop, and reference the validator name in `meta.validation`. The custom validation schema must include `errorMsg`; any other properties are passed to the validator as custom arguments.

```typescript
const validators = {
  validateEmail: (value, args) => {
    return !value || String(value).includes('@');
  }
};

<MuiForms schema={schema} validators={validators} onSubmit={handleSubmit} />
```

```json
{
  "meta": {
    "validation": {
      "validateEmail": {
        "errorMsg": "Invalid email format"
      }
    }
  }
}
```

[Full custom validation guide →](/fields/field-validation-custom)


---

## Dynamic Behavior

### How do I show/hide fields based on conditions?
Use the `exists` dependency:

```json
{
  "name": "taxId",
  "meta": {
    "displayName": "Tax ID",
    "displayType": "text",
    "dependencies": {
      "exists": {
        "ref": "accountType",
        "value": "business"
      }
    }
  }
}
```

[More on dependencies →](/field-dependencies)

### How do I create cascading dropdowns?
Use the `loadOptions` or `options` dependency:

```json
{
  "name": "state",
  "meta": {
    "displayType": "select",
    "config": {
      "url": "https://api.example.com/states",
      "queryParams": [["country", { "type": "fieldValue", "ref": "country" }]],
      "labelKey": "name",
      "valueKey": "code"
    },
    "dependencies": {
      "options": { "ref": "country" }
    }
  }
}
```

### How do I call an API when a field changes?
Use field `events` with `onChange`:

```typescript
const fns = {
  onCountryChange: (value) => {
    fetch(`/api/country/${value}`)
      .then(r => r.json())
      .then(data => console.log('Country data:', data));
  }
};
```

[Field Events guide →](/field-events)

### How do I update a field property based on another field?
Use `propUpdate` dependency:

```json
{
  "dependencies": {
    "propUpdate": {
      "ref": "userType",
      "propName": "displayName",
      "valueMap": {
        "personal": "Optional: Company Name",
        "business": "Company Name (Required)"
      }
    }
  }
}
```

---

## API & Remote Data

### How do I load dropdown options lazily from an API?
Configure the `config` property:

```json
{
  "meta": {
    "displayType": "select",
    "config": {
      "url": "https://api.example.com/products",
      "urlType": "remote",
      "labelKey": "name",
      "valueKey": "id",
      "lazy": true
    }
  }
}
```

[Select Field →](/fields/select-field#how-to-load-options-from-remote-api)

### How do I add authentication headers to API calls?
Use the `headers` config property:

```typescript
<MuiForms
  schema={schema}
  config={{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }}
  onSubmit={handleSubmit}
/>
```

### How do I filter API results with query parameters?
Use `queryParams` in the field config:

```json
{
  "config": {
    "url": "https://api.example.com/items",
    "queryParams": [
      ["category", "electronics"],
      ["inStock", true]
    ]
  }
}
```

### How do I handle API errors?
Check the API response and handle errors in your `onError` handler:

```typescript
const handleError = (errors) => {
  console.error('Form errors:', errors);
  // Show error message to user
};

<MuiForms
  schema={schema}
  onSubmit={handleSubmit}
  onError={handleError}
/>
```

---

## Styling & Layout

### How do I change the appearance of fields?
Use the global `config`:

```typescript
<MuiForms
  schema={schema}
  config={{
    variant: 'filled',      // outlined, filled, standard
    size: 'small'           // small, medium, large
  }}
  onSubmit={handleSubmit}
/>
```

[Configuration guide →](/config)

### How do I make fields responsive?
Use `displayProps` for each field:

```json
{
  "meta": {
    "displayProps": {
      "xs": "12",  // 100% on mobile
      "md": "6",   // 50% on tablet
      "lg": "4"    // 33% on desktop
    }
  }
}
```

### How do I add spacing between fields?
Use `gapX` and `gapY` in config:

```typescript
<MuiForms
  schema={schema}
  config={{
    gapX: 1,    // Horizontal gap in rem
    gapY: 1.5   // Vertical gap in rem
  }}
  onSubmit={handleSubmit}
/>
```

[Spacing guide →](/spacing)

### How do I customize field styling?
Use custom CSS or Material-UI theme customization. See [Styling →](/styling).

---

## Form Submission

### How do I handle form submission?
Implement the `onSubmit` callback:

```typescript
const handleSubmit = (formData) => {
  console.log('Form data:', formData);
  // Send to API
};

<MuiForms schema={schema} onSubmit={handleSubmit} />
```

### How do I submit the form programmatically?
Get a ref to the form and call submit:

```typescript
const formRef = useRef();

const handleSubmit = () => {
  formRef.current?.submit();
};

return (
  <>
    <MuiForms ref={formRef} schema={schema} onSubmit={/*...*/} />
    <Button onClick={handleSubmit}>Submit</Button>
  </>
);
```

### How do I add custom submit and cancel buttons?
Use the `buttons` prop or modify the footer:

```typescript
<MuiForms
  schema={schema}
  onSubmit={handleSubmit}
  // Custom button configuration
/>
```

[Custom Footer →](/custom-footer)

---

## Advanced Features

### How do I use custom or complex field types?
Create a custom field component:

```typescript
const CustomDateRange = (props) => {
  // Your custom component
};

export default CustomDateRange;
```

[Custom Fields →](/custom-fields)

### How do I handle file uploads?
Use the `file` displayType:

```json
{
  "name": "document",
  "meta": {
    "displayName": "Upload Document",
    "displayType": "file"
  }
}
```

### How do I preload form data?

[Preload Data →](/preload-data)

---

## Performance

### How do I optimize API calls?
- Use `lazy: true` for large option lists
- Implement debouncing for search fields
- Use server-side filtering with `queryParams`
- Batch related API calls

---

## Troubleshooting

### My field is not showing/hiding correctly
1. Verify the `ref` field name matches exactly
2. Check the field value using browser devtools
3. Ensure the condition value matches the actual field value

### API calls are not working
1. Check CORS headers in Network tab
2. Verify API endpoint is correct
3. Check authentication headers are valid
4. Test endpoint manually with curl/Postman

### Cascading dropdowns not working
1. Verify parent field has a value
2. Check `queryParams` references correct field name
3. Ensure `dependencies.loadOptions` is configured
4. Test API endpoint with manual request

### Validation not firing
1. Verify `validation` is in the `meta` object
2. Check field name matches validation reference
3. Test with browser console to see errors
4. Ensure field is not hidden by dependencies

---

## Discussions 

- Is there a way we can select the default tab other than the first tab in tabbed forms?
[Answer](https://github.com/manojadams/mui-forms/discussions/64)

- How to add custom cancel and save button in the Form?
[Answer](https://github.com/manojadams/mui-forms/discussions/47)

- How to use nested objects in form submit?
[Answer](https://github.com/manojadams/mui-forms/discussions/42)

- How to know the name or number of the current tab?
[Answer](https://github.com/manojadams/mui-forms/discussions/73)

- [More...](https://github.com/manojadams/mui-forms/discussion)

## More Help

- [Full documentation](/getting-started)
- [GitHub Discussions](https://github.com/manojadams/mui-forms/discussions)
- [GitHub Issues](https://github.com/manojadams/mui-forms/issues)
- [Examples →](/examples)

