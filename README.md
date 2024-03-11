# Weather Application

This template should help get you started developing with Vue 3 in Vite.

## Environment Variables

To run the application locally, create a .env.local file at the root level of the application and include the weather API key using the VITE_KEY key name.

```sh
VITE_KEY=<weather api key>
```

## Project Commands

### Install packages

```sh
npm install
```

### Launch the application locally

```sh
npm run dev
```

### Visual components to showcase the UI elements

```sh
npm run storybook
```

### Test the main components and formatting functionalities

```sh
npm run test:unit
```

## Project Structure

This template should help get you started developing with Vue 3 in Vite.

## Services

Organize the functions responsible for fetching location and weather forecast data from the API.

Additionally, the application includes a bridge file to parse the weather API responses (third-party) and convert them into the format used by the application.

The HttpClient file encapsulates Axios functionalities, providing interceptors to handle the secret API key and server errors.

## Utils

Provide a formatting function that wraps the Intl functionality to handle internationalization using the locale. Utilize intl.NumberFormat to assist with temperature unit formatting and intl.DateTimeFormat to help with weekday and time formatting.

## Store

The application utilizes Pinia as the primary state management solution. The store serves as the single source of truth for managing weather and location data. All API requests and data observers are handled through state management side effects.

## Types

The application is fully typed, ensuring that weather conditions and locations utilize strongly typed objects to prevent spelling mistakes.

## Styles

The entire design system is defined in the styles file.

The application utilizes color variables to ensure that changes to these variables are reflected across all components.

Typography is also defined within the styles, eliminating the need to specify font sizes and weights in individual components.

Additionally, a media query auxiliary function is used in all components to organize styles for desktop and mobile displays.

## Mocks

Preloaded data using the weather and location object formats, is utilized for unit tests and to initialize the Storybook documentation.

## Components

### Shared

A simple dumb component is utilized to demonstrate skeleton loading, suspense, and icon functionality.

### Cards

The core components of the application display weather information for different time frames including day and hour, as well as the current weather. Additionally, there is a wrapper component that encapsulates simple logic using the temperature to define the card color as cold, chilly, warm, or hot.

### Navbar

The component includes a toggle button to list default locations, enabling navigation between different city weather conditions. Additionally, an auto-complete search feature allows users to search for additional locations and include them in the list.

## Unit Tests

The unit tests cover the main card components and formatting functionalities.

These tests ensure that the components render the formatted data correctly using the properties provided.

Additionally, they validate that if styles and colors are changed, the components are revisited to validate the logic.

### Command

```sh
npm run test:unit
```

## Visual Documentation

The Storybook provides visual documentation that guides developers through the application's design system.

Developers can utilize the guidelines defined to implement colors and typography, and also test individual components to observe their behavior using different properties.

### Command

```sh
npm run storybook
```
