// Components
import Vivaldi from './routes/Vivaldi.svelte'
import Brave from './routes/Brave.svelte'
import NotFound from './routes/NotFound.svelte'

// Export the route definition object
export default {
    // Exact path
    '/': Vivaldi,
    '/brave/': Brave,

    // Catch-all, must be last
    '*': NotFound,
}
