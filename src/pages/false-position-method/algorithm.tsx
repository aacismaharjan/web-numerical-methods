export default function Algorithm() {
  return (
    <div>
      <h1>False Position Method</h1>
      <ol>
        <li>
          Decide initial values for{' '}
          <code>
            x<sub>1</sub>
          </code>{' '}
          and{' '}
          <code>
            x<sub>2</sub>
          </code>{' '}
          and stopping criterion, <code>E</code>.
        </li>
        <li>
          Compute{' '}
          <code>
            f<sub>1</sub> = f(x<sub>1</sub>)
          </code>{' '}
          and{' '}
          <code>
            f<sub>2</sub> = f(x<sub>2</sub>)
          </code>
          .
        </li>
        <li>
          If{' '}
          <code>
            f<sub>1</sub> &times; f<sub>2</sub> &gt; 0
          </code>
          ,{' '}
          <code>
            x<sub>1</sub>
          </code>{' '}
          and{' '}
          <code>
            x<sub>2</sub>
          </code>{' '}
          do not bracket any root and go to step 7; Otherwise continue.
        </li>
        <li>
          Compute{' '}
          <code>
            x<sub>0</sub> = x<sub>1</sub> - f<sub>1</sub> &times; (x<sub>2</sub>{' '}
            - x<sub>1</sub>) / (f<sub>2</sub> - f<sub>1</sub>)
          </code>{' '}
          and compute{' '}
          <code>
            f<sub>0</sub> = f(x<sub>0</sub>)
          </code>
          .
        </li>
        <li>
          If{' '}
          <code>
            f<sub>1</sub> &times; f<sub>0</sub> &lt; 0
          </code>{' '}
          then <br />
          set{' '}
          <code>
            x<sub>2</sub> = x<sub>0</sub>
          </code>{' '}
          <br />
          else <br />
          set{' '}
          <code>
            x<sub>1</sub> = x<sub>0</sub>
          </code>{' '}
          <br />
        </li>
        <li>
          If the absolute value of{' '}
          <code>
            (x<sub>2</sub> - x<sub>1</sub>)
          </code>{' '}
          is less than error <code>E</code>, then <br />
          root ={' '}
          <code>
            x<sub>1</sub> - f<sub>1</sub> &times; (x<sub>2</sub> - x<sub>1</sub>
            ) / (f<sub>2</sub> - f<sub>1</sub>)
          </code>{' '}
          <br />
          write the value of the root
          <br />
          go to step 7 <br />
          else <br />
          go to step 4
        </li>
        <li>Stop.</li>
      </ol>
    </div>
  );
}
