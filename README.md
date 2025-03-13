# Abdullah Durrani's Portfolio

This portfolio showcases my projects and skills in web development, with a focus on front-end technologies and interactive web applications.

**Explore the projects to see demonstrations of my coding abilities and design insights.**

## Notes

### Update: March 5, 2025

**Challenge Encountered:**
I encountered difficulties in adjusting the layout when applying flex properties via the `app.css` to the `body`. The desired layout adjustments weren't achieved, which suggested that both components might need a common parent container for better control.

Despite the `body` tag serving as a container, directly styling it in `app.css` did not produce the expected results, particularly in terms of flex spacing between the `home` and `nav` components.

**Solution Implemented:**
To address this, I introduced a `main` div as a parent for these components. Initial tests suggest that this setup allows for more precise control over component widths and layout adjustments.

**Result:**
After hours of tweaking and adding a 'main' component with specific CSS settings, I finally achieved the desired layout:

```jsx
return (
  <>
    <main className='main-component'>
      <div id='navbar-component'> 
        <Nav />
      </div>
      <div id='home-component'>
        {page === "Home" && <Home setPage={setPage} />}
      </div>
    </main>
  </>
);
```

<details>
<summary>Subsequent CSS that resolved the issue and yielded desired results</summary>

```css
.main-component {
    border: 10px solid black;
    width: 98vw;
    height: 96vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```
</details>
<br>

## Current Portfolio Snapshot
<details> 
<summary>View Current Portfolio Build</summary> 

<img src="frontend/src/assets/images/current_portfolio_build_3:5:25.png" width="600px" height="300px" alt="Current Portfolio Build"> 
</details> 
