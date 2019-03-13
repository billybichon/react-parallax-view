# Parallax View effect for React #

## Installation ##

You can install it via npm:
```bash
npm install react-parallax-view
```

or with yarn:
```bash
yarn add react-parallax-view
```

## Usage ##
Just wrap your root component (or any parent component) with ParallaxContainer, then wrap your children with ParallaxView:
```jsx harmony
import { ParallaxContainer, ParallaxView } from 'react-parallax-view';

.
.
.
render () {
  return (
    <ParallaxContainer>
      <header>some header</header>
      <section>
        <ParallaxView layer={2}>
          <img .../>
        </ParallaxView>
        <ParallaxView layer={5}>
          <img .../>
        </ParallaxView>
      </section>
      <footer>some footer</footer>
    </ParallaxContainer>
  );
}
```
The layer is there to manage the parallax effect.

:memo: The higher the layer the smaller the effect (the first layer is 'physically' closer than the higher ones).

#### Careful ####

:one: Only __one__ direct child is authorize, in fact a child is mandatory you cannot have an empty ParallaxView (the restriction is there to avoid having useless empty ParallaxView).
But you can also directly put some text, in that case it will be wrap into a ___span___ tag.

:two: The ParallaxView's style and his direct child's style are merge together, so be careful as the child styling can override some of the ParallaxView's.


## Demo ##
Coming soon... :clapper:
