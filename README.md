## Steps

#### Data and Global Context

Explore the data.jsx file. Set up a global context with an isSidebarOpen state value (boolean) and two functions: one to close and the other to open the sidebar. Make all of these values available in the application.

#### Components

Create four components: Navbar, Hero, Sidebar, and Submenu.

#### Navbar

In the Navbar, for now, set up a logo (h3) and a button to open the sidebar. Grab the openSidebar function from the global context. Optionally, you can install and set up an icon from react-icons in the toggle button. Add CSS for the Navbar.

#### Sidebar

In the Sidebar component, import sublinks from data.jsx, iterate over the list, and display links in the component. Set up the Sidebar CSS. Use the isSidebarOpen and closeSidebar functions from the global context to show/hide the sidebar.

#### Hero

Set up a Hero component and add CSS.

#### NavLinks

Set up NavLinks in the Navbar. Import sublinks from data and iterate over them to render pages on the screen. Set up a NavLink CSS.

#### Submenu

Set up a Submenu component with some general CSS. In the global context, set up a pageId with a default value of null and make it available in the app. In the NavLinks component, once the user moves the mouse over the link, set the pageId with the specific page ID. In the Submenu component, grab the pageId from the global context. Based on that ID, get the specific page from sublinks and render the page and links in the submenu. Add CSS to the Submenu component.

#### Edge Cases

Fix multiple edge cases.

The flow of the application should look something like this:

- Explore the data.jsx file. Set up a global context with an isSidebarOpen state value (boolean) and two functions: one to close and the other to open the sidebar. Make all of these values available in the application.

- Create four components: Navbar, Hero, Sidebar, and Submenu.

- In the Navbar, for now, set up a logo (h3) and a button to open the sidebar. Grab the openSidebar function from the global context. Optionally, you can install and set up an icon from react-icons in the toggle button. Add CSS for the Navbar.

- In the Sidebar component, import sublinks from data.jsx, iterate over the list, and display links in the component. Set up the Sidebar CSS. Use the isSidebarOpen and closeSidebar functions from the global context to show/hide the sidebar.

- Set up a Hero component and add CSS.

- Set up NavLinks in the Navbar. Import sublinks from data and iterate over them to render pages on the screen. Set up a NavLink CSS.

- Set up a Submenu component with some general CSS. In the global context, set up a pageId with a default value of null and make it available in the app. In the NavLinks component, once the user moves the mouse over the link, set the pageId with the specific page ID. In the Submenu component, grab the pageId from the global context. Based on that ID, get the specific page from sublinks and render the page and links in the submenu. Add CSS to the Submenu component.

- Fix multiple edge cases.
