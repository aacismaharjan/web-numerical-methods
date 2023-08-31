export default function Algorithm() {
  return (
    <div>
      <h1>Newton-Raphson Method</h1>
      <ol>
        <li>
          Choose a function <code>f(x)</code> and its derivative{' '}
          <code>ff(x)</code>, and an initial guess for the root,{' '}
          <code>
            x<sub>0</sub>
          </code>
          .
        </li>
        <li>
          Iterate using the equation:{' '}
          <code>
            x<sub>n+1</sub> = x<sub>n</sub> - f(x<sub>n</sub>) / ff(x
            <sub>n</sub>)
          </code>
          .
        </li>
        <li>
          If the absolute difference between consecutive approximations,{' '}
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
        <li>
          Otherwise, repeat step 2 with the new approximation{' '}
          <code>
            x<sub>n+1</sub>
          </code>
          .
        </li>
        <li>
          Stop when the desired accuracy is achieved or a maximum number of
          iterations is reached.
        </li>
      </ol>
    </div>
  );
}
