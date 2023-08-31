'use client';

import { Parser } from 'expr-eval';
import { useEffect, useState } from 'react';
import { propDatastore } from '@/utils/propDatastore';
import Link from 'next/link';
import Script from 'next/script';
import { submitEvent } from '@/app/custom';

export function evalFunc(exp: String, x: Number) {
  const parser = new Parser();
  const newExp = exp.replace(/x/g, x.toString());
  const calculation = parser.evaluate(newExp);
  return calculation;
}

export const NewtonRaphsonSolution = (props: any) => {
  let x0 = 0,
    fx = 0,
    fpx = 0,
    step = 1;
  let { x1, ff, f, tolerance, max, precision } = props;

  fx = f(x1);
  fpx = ff(x1);

  let el = [];

  do {
    fx = f(x1);
    fpx = ff(x1);

    x1 = x1 - fx / fpx;

    el.push(
      ` <tr>
     <td class='border border-slate-700'>${step}</td>
     <td class='border border-slate-700'>${x1.toFixed(precision)}</td>
     <td class='border border-slate-700'>${fx.toFixed(precision)}</td>
     <td class='border border-slate-700'>${fpx.toFixed(precision)}</td>
     <td class='border border-slate-700'>${x1.toFixed(precision)}</td>
   </tr>`
    );

    step++;
  } while (Math.abs(fx) > tolerance && step <= max);

  return (
    <div>
      <p className="mb-3">Computing following table.</p>
      <table className="w-full border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600">Step</th>
            <th className="border border-slate-600">Initial</th>
            <th className="border border-slate-600">y</th>
            <th className="border border-slate-600">dy/dx</th>
            <th className="border border-slate-600">x</th>
          </tr>
        </thead>

        <tbody dangerouslySetInnerHTML={{ __html: el.join(' ') }}></tbody>
      </table>

      <p className="mb-3">
        The root of the function is {x1.toFixed(precision)}.
      </p>
    </div>
  );
};

export default function BisectionMethod() {
  const [variables, setVariables] = useState({
    x1: 2,
    tolerance: 0.001,
    max: 10,
    precision: 4,
    exp: 'x*x*x - 4 * x - 9',
    derivative: '3*x*x - 4',
    step: 1,
  });

  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    const para = propDatastore.getDatastore();
    if (para) setVariables(para);
  }, []);

  useEffect(() => {
    const button = document.getElementById('btn-submit');
    if (button) {
      button.setAttribute('data-function', variables.exp);
    }
  }, [variables.exp]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowSolution(false);

    const formData = new FormData(e.target);
    const obj: any = Object.fromEntries(formData);

    let x1 = parseFloat(obj.start);
    let tolerance = parseFloat(obj.tolerance);
    let max = parseInt(obj.max);
    let precision = parseInt(obj.digits);
    let exp = obj.function;
    let derivative = obj.derivative;
    let step = 1;

    const para = { x1, tolerance, max, precision, exp, derivative, step };
    setVariables(para);
    propDatastore.saveDatastore(para);
    setShowSolution(true);
  };

  const { x1, exp, derivative, tolerance, max, precision } = variables;
  const f = (x: Number) => evalFunc(exp, x);
  const ff = (x: Number) => evalFunc(derivative, x);

  return (
    <div>
      <h4 className="text-xl font-bold mb-2 text-yellow-400">
        Newton Raphson Method
      </h4>
      <Link
        href="/newton-raphson-method/algorithm"
        className="cursor-pointer inline-block my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Algorithm
      </Link>

      <form id="numerical-form" onSubmit={handleSubmit}>
        <div className="col-span-full mb-2">
          <label className="block text-sm font-medium leading-6 text-white-900">
            Enter function:{' '}
          </label>
          <input
            type="text"
            name="function"
            placeholder="Eg: x*x*x - 4 * x - 9"
            defaultValue={variables['exp']}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900  px-2"
          />
        </div>

        <div className="col-span-full mb-2">
          <label className="block text-sm font-medium leading-6 text-white-900">
            Enter derivative:{' '}
          </label>
          <input
            type="text"
            name="derivative"
            placeholder="Eg: 3*x*x - 4"
            defaultValue={variables['derivative']}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900  px-2"
          />
        </div>

        <div className="col-span-full mb-2">
          <label className="block text-sm font-medium leading-6 text-white-900">
            Enter initial guess:
          </label>
          <input
            type="text"
            name="start"
            placeholder="Eg: 1"
            defaultValue={variables['x1']}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900  px-2"
          />
        </div>

        <div className="col-span-full mb-2">
          <label className="block text-sm font-medium leading-6 text-white-900">
            Precision Digits:
          </label>
          <input
            type="number"
            name="digits"
            placeholder="Eg: 4"
            defaultValue={variables['precision']}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900  px-2"
          />
        </div>

        <div className="col-span-full mb-2">
          <label className="block text-sm font-medium leading-6 text-white-900">
            Maximum Steps:
          </label>
          <input
            type="number"
            name="max"
            placeholder="Eg: 10"
            defaultValue={variables['max']}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900  px-2"
          />
        </div>

        <div className="col-span-full mb-2">
          <label className="block text-sm font-medium leading-6 text-white-900">
            Tolerable Error:
          </label>
          <input
            type="text"
            name="tolerance"
            placeholder="Eg: 0.001"
            defaultValue={variables['tolerance']}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900  px-2"
          />
        </div>

        <button
          className="cursor-pointer block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          id="btn-submit"
          type="submit"
          onClick={submitEvent}
        >
          Submit
        </button>
        <br />
      </form>

      <br />

      {showSolution && (
        <>
          <NewtonRaphsonSolution
            f={f}
            ff={ff}
            x1={x1}
            tolerance={tolerance}
            max={max}
            precision={precision}
          />
        </>
      )}

      <div id="graph"></div>
    </div>
  );
}
