export default function Algorithm() {
  return (
    <div>
      <h1>Secant Method</h1>
      <ol>
        <li>
          Choose initial guesses for the root:{' '}
          <code>
            x<sub>0</sub>
          </code>{' '}
          and{' '}
          <code>
            x<sub>1</sub>
          </code>
          .
        </li>
        <li>
          Iterate using the formula:{' '}
          <code>
            x<sub>n+1</sub> = x<sub>n</sub> - f(x<sub>n</sub>) * (x<sub>n</sub>{' '}
            - x<sub>n-1</sub>) / (f(x<sub>n</sub>) - f(x<sub>n-1</sub>))
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
        <li>
          Otherwise, repeat step 2 with the new approximation values{' '}
          <code>
            x<sub>n</sub>
          </code>{' '}
          and{' '}
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
