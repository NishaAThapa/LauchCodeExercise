/**Exercise 18: Advanced Conditional Rendering with Objects

Problem:

Implement a function `renderComponent` that takes a component 
name ('Header', 'Footer', 'Sidebar', 'Content') and returns the 
corresponding component function from an object mapping. 

The component functions should return some simple html code in a string
depending on the type of component selected:
	- Header -> uses <header> tag in the string
	- Footer -> uses <footer> tag in the string
	- Sidebar -> uses <aside> tag in the string
	- Content -> uses <main> tag in the string


Use conditional logic to handle cases where the component does not exist, 
returning a default component.

	- Default component -> uses <div> tag in the string */

    function renderComponent(componentName) {
        // Define component mapping
        const components = {
          Header: () => "<header>Header Component</header>",
          Footer: () => "<footer>Footer Component</footer>",
          Sidebar: () => "<aside>Sidebar Component</aside>",
          Content: () => "<main>Content Component</main>",
        };
      
        // Return the corresponding function or a default component
        return (components[componentName] || (() => "<div>Default Component</div>"))();
      }
      
      // Testing different cases
      console.log(renderComponent("Header"));   // Output: <header>Header Component</header>
      console.log(renderComponent("Footer"));   // Output: <footer>Footer Component</footer>
      console.log(renderComponent("Sidebar"));  // Output: <aside>Sidebar Component</aside>
      console.log(renderComponent("Content"));  // Output: <main>Content Component</main>
      console.log(renderComponent("Unknown"));  // Output: <div>Default Component</div>
      