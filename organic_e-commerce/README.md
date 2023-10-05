


# Organic Cosmetics Shop: E-commerce Platform 

![Banner Image](/src/assets/github/banner.jpg)

## Table of Contents

- [Introduction]add .(#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [Authentication](#authentication)
- [Checkout Process](#checkout-process)
- [Getting Started](#getting-started)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

## Introduction

The Organic Cosmetics Shop is a meticulously crafted e-commerce platform dedicated to organic cosmetics. It utilizes TypeScript for static typing and Styled Components for efficient, readable styling. With Redux for state management, Firebase as the backend, and Netlify for deployment, it offers a seamless and reliable shopping experience. The live version is available [here](https://glowing-selkie-19ef51.netlify.app/).

### Why This Stack?
- **TypeScript**: Enhances development efficiency by reducing runtime errors through static typing.
- **Styled Components**: Allows for dynamic styling, facilitating a more interactive UI.
- **Redux**: Provides predictable state management, simplifying the handling of shared state.
- **Firebase**: Offers a real-time database for sync across all clients, aiding in user authentication and data storage.
- **Netlify**: Efficient and developer-friendly deployment with features like continuous integration and HTTPS.

## Features

- User Authentication (via Google & Email/Password)
- Product Browsing
- Shopping Cart Management
- Secure Checkout Process
- Responsive Design

## Technologies

- TypeScript
- Styled Components
- Redux
- Firebase
- Netlify
- Stripe

## Project Structure

The project is divided into `public` and `src` directories:

- `public/`: Contains static files and `index.html`.
- `src/`: Contains the application code.
  - `assets/`: Hosts static assets like SVG images.
  - `components/`: Houses reusable components.
  - `routes/`: Includes components and styles for different application routes.
  - `store/`: Manages the Redux store, reducers, actions, and sagas.
  - `utils/`: Contains utility functions and configurations.

### Notable Directories
- `src/components/`: Each subdirectory within `components` represents a reusable UI component.
- `src/store/`: The `store` directory is organized modularly, enhancing code maintainability and readability.

### Lazy Loading
Lazy loading optimizes the application's performance by loading components as they are required, reducing initial load time.

## State Management

The application state is managed using Redux with a structure designed to minimize human error:

- **Three Reducers**: Each responsible for managing different aspects of the application’s state.
- **Modular Structure**: Each reducer is organized into folders containing actions, types, selectors, reducers, and sagas.

### Cart Reducer Example
The Cart Reducer manages the shopping cart's state, with helper functions facilitating item management in the cart.

```typescript
// SetCartItems Action Creator
export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

// Add Item to Cart
export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
```

### Categories Reducer Example
The Categories Reducer manages product categories, handling asynchronous requests to fetch categories from Firebase. Action creators are used to initiate the fetching process, handle success, and manage errors.

```typescript
// Snippet from Categories Reducer
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action: AnyAction): CategoryState => {
	if (fetchCategoriesStart.match(action)) {
		return { ...state, isLoading: true };
	}
	if (fetchCategoriesSuccess.match(action)) {
		return { ...state, categories: action.payload, isLoading: false };
	}
	if (fetchCategoriesFailed.match(action)) {
		return { ...state, isLoading: false, error: action.payload };
	}
	return state;
};
```

## Authentication
Users can authenticate through Google or by creating an account.

## Checkout Process
The checkout process is intuitive, with Stripe integration for secure payments.

### User Reducer Example
The User Reducer manages user authentication and sessions, handling actions related to sign-in, sign-up, and sign-out. It maintains the user state, responding to various actions and statuses.

```typescript
// Snippet from User Reducer
export const userReducer = (state = USER_INITIAL_STATE, action = {} as AnyAction): UserState => {
	if (signInSuccess.match(action)) {
		return { ...state, currentUser: action.payload };
	}
	if (signOutSuccess.match(action)) {
		return { ...state, currentUser: null };
	}
	return state;
};
```

## Contact
- **Roxana Copocean**
  - Email: roxana.mica@gmail.com
  - Portfolio: [roxana-copocean.com](http://roxana-copocean.com)


## Screenshots

Below are screenshots of the Organic Cosmetics Shop platform showcasing its features and responsive design.

### Landing Page
![Landing Page](/src/assets/github/landing_page.jpg)

### Shop Products
![Shop Products](/src/assets/github/shop.jpg)

### Shopping Cart
![Shopping Cart](/src/assets/github/shop_cart.jpg)

### Checkout Page
![Checkout Page](/src/assets/github/checkout.jpg)

### Card Payment
![Card Paymente](/src/assets/github/card_payment.jpg)



