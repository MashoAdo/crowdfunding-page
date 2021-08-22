## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This is a landing page website for a crowdfunding donation page.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make

### Links

- Solution URL: [https://github.com/MashoAdo/crowdfunding-page]
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use of mixins to eliminate repeatition.

```css
.bookmark {
	@include flexRow;
	&:not(.no-hover):hover {
		opacity: 0.5;
	}
}
```

```js
radiobuttonsArray.forEach((item, index) => {
	item.addEventListener("click", () => {
		// remove the initial background of the radio btn,to avoid the background being applied to two or more btns.//
		radioArray.forEach((r) => {
			r.classList.remove("background");
		});
		// remove border color for other pledge2 before selecting a new one
		arrPledge.forEach((p) => {
			p.classList.remove("pledge2-border");
		});
		// add a new background to the radio btn
		radioArray[index].classList.toggle("background");
		//  add pledge border
		arrPledge[index].classList.add("pledge2-border");
	});
});
```

### Continued development

I want to conitune learning javascript especially DOM manipulation in order to create highly functional programs.

### Useful resources

- [Example resource 1](https://devhints.io/sass) - This article provided some useful, easy to grasp sass cheat sheet. I will continue using it more in order to expand my sass knowledge.

## Author

Masho Ado Nache

EMail- mashoado@gmail.com
