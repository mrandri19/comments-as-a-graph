# comments-as-a-graph
Read [4chan](https://www.4chan.org) and [reddit](https://www.reddit.com/) (coming soon) comments using a graph visualization.

## Try news.ycombinator.com
- [`Mozilla Is Hiring a Developer to Work on Thunderbird Full-Time`](https://mrandri19.github.io/comments-as-a-graph/?thread=hn)
- [`3,500 Occult Manuscripts Will Be Digitized and Made Freely Available Online`](https://mrandri19.github.io/comments-as-a-graph/?thread=hn2)
- [`Building an AlphaZero AI using Python and Keras`](https://mrandri19.github.io/comments-as-a-graph/?thread=hn3)

## Try reddit.com
- [`Chrome 64 - What's New in DevTools`](https://mrandri19.github.io/comments-as-a-graph/?thread=reddit)
- [`GCC 7.3 Released`](https://mrandri19.github.io/comments-as-a-graph/?thread=reddit2)

## Try 4chan.org threads
- [`42064745`](https://mrandri19.github.io/comments-as-a-graph/?thread=42064745)
- [`44390482`](https://mrandri19.github.io/comments-as-a-graph/?thread=44390482)
- [`44461398`](https://mrandri19.github.io/comments-as-a-graph/?thread=44461398)
- [`64429683`](https://mrandri19.github.io/comments-as-a-graph/?thread=64429683)
- [`9452822`](https://mrandri19.github.io/comments-as-a-graph/?thread=9452822)

## How it's made
The thread is downloaded from the [4chan api](https://a.4cdn.org), then a python script converts it into a `.gv` file by 
parsing the comments and searching for `>>POST_ID` references. These references become the graph's edges and the posts become
the nodes. Then the file is saved in the site root. [Example](https://github.com/mrandri19/comments-as-a-graph/blob/master/42064745.gv)

The frontend's js loads the `.gv` file and displays it using [viz.js](https://github.com/mdaines/viz.js) but the `viz.js` was
custom compiled (via emscripten) to shrink it to 1.8MB instead of 2.4MB.

The panning and zooming is provided by [svg-pan-zoom](https://github.com/ariutta/svg-pan-zoom) and the minimap was implemented
by rendering the svg graph to a canvas.
