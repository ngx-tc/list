## About

@ngx-tc/list is an Angular library that provides developers with an easy way to create lists in their applications. The library includes a set of customizable and reusable components that can be used to create lists of items such as menus, navigation items, or any other type of list-based content.

The @ngx-tc/list library includes a number of pre-built list components that can be easily customized and extended to fit the needs of any application. These components include the List Component, which is the main component for displaying a list of items, as well as several supporting components such as List Item, List Header, and List Footer.

@ngx-tc/list is designed to be easy to use and highly customizable, with a focus on performance and scalability. Whether you need to display a simple list or a complex set of nested lists, @ngx-tc/list provides the tools you need to create robust and responsive list-based interfaces in your Angular applications.

## Usage

Install `@ngx-tc/list` in your project:

```
npm install @ngx-tc/list
```

Import `TcListModule` e.g. in your `app.module.ts`:
```typescript
import { TcListModule } from '@ngx-tc/list';

@NgModule({
  imports: [
    ...
    TcListModule
  ],
})
export class AppModule {}
```

Use the `tc-list` component in you app:
```html
<tc-list>
  <tc-list-item>Item 1</tc-list-item>
  <tc-list-item>Item 2</tc-list-item>
  <tc-list-item>Item 3</tc-list-item>
</tc-list>
```

## Demo
To view a working demo of the library in action, please follow the provided link. The demo will allow you to explore the various components and features included in @ngx-tc/list and see how they can be used to create powerful and responsive list-based interfaces in your Angular applications.
[http://tc-library.type-code.pro/#/components/lists](http://tc-library.type-code.pro/#/components/lists)
