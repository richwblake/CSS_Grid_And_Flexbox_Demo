# CSS Flexbox and Grid

This application serves as a demonstration of Grid and Flexbox, two key CSS styling concepts that are essential for setting up webpage layouts. We'll be consulting `basics.html` and `basics.css`, which are in our `basics` folder, throughout this README - for more advanced examples, you can check out the files in the `flex` and `grid` folders. There is also an assessment at the end of this README - to complete that, you'll use the files in the `assessment` folder.

## Grid

We'll start off by talking about **Grid**, as it's often the best choice for designing the overall layout of your webpage. You can use Flexbox to design everything, but Grid will likely make your life much easier.

Let's open up `basics.html` in our browser and take a look at it. You should see something like this:

![Screen Shot 2022-05-03 at 1 17 54 PM](https://user-images.githubusercontent.com/89106805/166559090-9124419d-b558-4965-b280-87cebd5b2dc6.png)

What do we have here? Well, it's a grid of many-colored rectangles (albeit an uneven grid). If you look in our `body.html` file, you should see several `divs` nested inside of our `body` tag, with `ids` like `"row-one-column-one"`. Each of these `divs` corresponds with one of the colored rectangles in the image above. We've given each of them a specific place in a grid that we've defined on out `body` tag.

If you look at `basics.css`, you'll see something similar to the following code:

```
body {
  display: grid;
  grid-template-rows: 10vh 15vh 20vh 55vh;
  grid-template-columns: 10vw 15vw 30vw 45vw;
}
```

Setting the `display` attribute to `grid` for our `body` allows us to divide our `body` into different rows and columns, which together make up a grid. We declare the different rows and columns in our grid using `grid-template-rows` and `grid-template-columns`. In the above example, we've given our `body` tag's grid four rows, one that is `10vh` tall, one that is `15vh` tall, another that is `20vh` tall, and a final one that is `55vh` tall (together, these add up to `100vh`, which corresponds with 100% of the height of our viewport). We've done something similar for our columns, except their total width adds up to the total width of our viewport.

When setting rows and columns, the left-most value will correspond with the top row and the left-most column, while the right-most value will correspond with the bottom row and the right-most column. The top row and and left-most column will be row `1` and column `1`. The row second from the top and the column second from the left will be row `2` and column `2`. This pattern continues as you create rows and columns.

## Assessment
This is a challenge assessment to help you understand the concepts of CSS Flexbox and Grid. You will be asked to modify a simple CSS file that will be used to style a simple HTML file. Initially, both the flex and grid container divs are not quite right. They look something like this:

![HTML page before any changes](./images/before.png)

Using your knowledge of CSS Flexbox and Grid, modify the CSS file to make the flex and grid container divs look like the following:

![HTML page after changes](./images/after.png)

Remember that there are many ways to solve this challenge. The only requirement is that you modify the CSS file to make the flex and grid container divs look like the second image. After completing this challenge, you will be able to:
- Use CSS Flexbox and Grid
- Use CSS Flexbox and Grid to create simple layouts
- Use CSS Flexbox and Grid to make complicated layouts more manageable

Switch to the "possible-solution" branch after completing the challenge to see a possible solution.
