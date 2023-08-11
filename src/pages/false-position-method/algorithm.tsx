export default function Algorithm() {
  return (
    <div>
      <h1>Bisection Method</h1>
      <ol>
        <li>
          Decide initial values for x<sub>1</sub> and x<sub>2</sub> and stopping
          criterion, E.
        </li>
        <li>
          Compute f<sub>1</sub> = f(x<sub>1</sub>) and f<sub>2</sub> = f(x
          <sub>2</sub>).
        </li>
        <li>
          If f<sub>1</sub> &times; f<sub>2</sub> &gt; 0, x<sub>1</sub> and x
          <sub>2</sub>, do not bracket any root and go to step 7; Otherwise
          continue.
        </li>
        <li>
          Compute x<sub>0</sub> =; (x<sub>1</sub> + x<sub>2</sub>) /2 and
          compute f<sub>0</sub> = f(x<sub>0</sub>)
        </li>
        <li>
          If f<sub>1</sub> &times; f<sub>2</sub> &lt; 0 then <br />
          set x<sub>2</sub> =; x<sub>0</sub> <br />
          else <br />
          set x<sub>1</sub> = x<sub>0</sub> <br />
          set f<sub>1</sub> = f<sub>0</sub>
        </li>
        <li>
          If absolute value of (x<sub>2</sub> - x<sub>1</sub>) / x<sub>2</sub>{' '}
          is less than error E, then <br />
          root = (x<sub>1</sub> + x<sub>2</sub>) /2 <br />
          write the value of root
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
