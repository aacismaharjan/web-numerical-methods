export default function Algorithm() {
  return (
    <div>
      <h1>Fixed Point Iteration Method</h1>
      <ol>
        <li>
          Choose an initial guess for the root,{' '}
          <code>
            x<sub>0</sub>
          </code>
          .
        </li>
        <li>
          Define the iterative equation:{' '}
          <code>
            x<sub>n+1</sub> = g(x<sub>n</sub>)
          </code>
          , where <code>g(x)</code> is a function that transforms <code>x</code>
          .
        </li>
        <li>
          Iterate using the equation:{' '}
          <code>
            x<sub>n+1</sub> = g(x<sub>n</sub>)
          </code>
          .
        </li>
        <li>
          If the difference between consecutive approximations,{' '}
          <code>
            |x<sub>n+1</sub> - x<sub>n</sub>|
          </code>
          , is less than a predetermined error <code>E</code>, then the current
          approximation{' '}
          <code>
            x<sub>n+1</sub>
          </code>{' '}
          can be considered as the root.
        </li>
        <li>Otherwise, repeat from step 3.</li>
        <li>
          Stop when the desired accuracy is achieved or a maximum number of
          iterations is reached.
        </li>
      </ol>
    </div>
  );
}
