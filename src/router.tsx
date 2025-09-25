import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'

// Import components
import App from './App'
import Watchlist from './Watchlist/Watchlist'
import Portfolio from './Portfolio/Portfolio'

// Create the root route
const rootRoute = createRootRoute({
  component: App,
})

// Create routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Portfolio,
})

const WatchlistRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/watchlist',
  component: Watchlist,
})

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  WatchlistRoute,
])

// Create the router
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
