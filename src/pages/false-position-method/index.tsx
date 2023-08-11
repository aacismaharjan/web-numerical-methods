'use client';

import RootLayout from '@/app/layout';
import { Parser } from 'expr-eval';
import { useEffect, useState } from 'react';
import './../../app/globals.css';
import Navbar from '@/components/Navbar';
import { propDatastore } from '@/utils/propDatastore';
import Link from 'next/link';

export function evalFunc(exp: String, x: Number) {
  const parser = new Parser();
  const newExp = exp.replace(/x/g, x.toString());
  const calculation = parser.evaluate(newExp);
  return calculation;
}

export const FallbackSolution = (props: any) => {
  const { f1, f2, f } = props;

  if (f1 * f2 > 0) {
    return (
      <table className="w-full border-collapse border border-slate-500">
        <tbody>
          <tr>
            <td className="border border-slate-700">X</td>
            {[...Array(13)].map((x, i) => (
              <td className="border border-slate-700" key={i}>
                {i - 6}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border border-slate-700">F(X)</td>
            {[...Array(13)].map((x, i) => (
              <td className="border border-slate-700" key={i}>
                {f(i - 6)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }

  return <></>;
};

/*
 * x0 - root of a function
 * f0 - function of root
 * x1 - initial guess x1
 * x2 - initial guess x2
 * f1 - function of x1
 * f2 - function of x2
 */

export const FalsePositionSolution = (props: any) => {
  let x0 = 0,
    f0 = 0,
    f1 = 0,
    f2 = 0,
    step = 1;
  let { x1, x2, f, tolerance, max, precision } = props;

  f1 = f(x1);
  f2 = f(x2);

  let el = [];

  if (f(x1) * f(x2) > 0 || (x1 == 0 && x2 == 0)) return <></>;

  do {
    x0 = x1 - (f1 * (x2 - x1)) / (f2 - f1);
    f0 = f(x0);

    el.push(
      ` <tr>
     <td class='border border-slate-700'>${step}</td>
     <td class='border border-slate-700'>${x1.toFixed(precision)}</td>
     <td class='border border-slate-700'>${f1.toFixed(precision)}</td>
     <td class='border border-slate-700'>${x2.toFixed(precision)}</td>
     <td class='border border-slate-700'>${f2.toFixed(precision)}</td>
     <td class='border border-slate-700'>${x0.toFixed(precision)}</td>
     <td class='border border-slate-700'>${f0.toFixed(precision)}</td>
   </tr>`
    );

    if (f0 * f1 < 0) {
      x2 = x0;
      f2 = f0;
    } else {
      x1 = x0;
      f1 = f0;
    }

    step++;
  } while (Math.abs(f0) > tolerance && step <= max);

  return (
    <div>
      <p className="mb-3">Computing following table.</p>
      <table className="w-full border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600">Step</th>
            <th className="border border-slate-600">x1</th>
            <th className="border border-slate-600">f1</th>
            <th className="border border-slate-600">x2</th>
            <th className="border border-slate-600">f2</th>
            <th className="border border-slate-600">x0</th>
            <th className="border border-slate-600">f0</th>
          </tr>
        </thead>

        <tbody dangerouslySetInnerHTML={{ __html: el.join(' ') }}></tbody>
      </table>

      <p className="mb-3">
        The root of the function is {x0.toFixed(precision)}.
      </p>
    </div>
  );
};

export default function FalsePositionMethod() {
  const [variables, setVariables] = useState({
    x1: 2,
    x2: 3,
    tolerance: 0.001,
    max: 10,
    precision: 4,
    exp: 'x*x*x - 4 * x - 9',
    step: 1,
  });

  useEffect(() => {
    const para = propDatastore.getDatastore();
    if (para) setVariables(para);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj: any = Object.fromEntries(formData);

    let x1 = parseFloat(obj.start);
    let x2 = parseFloat(obj.end);
    let tolerance = parseFloat(obj.tolerance);
    let max = parseInt(obj.max);
    let precision = parseInt(obj.digits);
    let exp = obj.function;
    let step = 1;

    const para = { x1, x2, tolerance, max, precision, exp, step };
    setVariables(para);
    propDatastore.saveDatastore(para);
  };

  const { x1, x2, exp, tolerance, max, precision } = variables;
  const f = (x: Number) => evalFunc(exp, x);

  let f1, f2, i;

  f1 = f(x1);
  f2 = f(x2);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-2 px-2 sm:px-2 ">
        <h4 className="text-xl font-bold mb-2 text-yellow-400">
          False Position Method
        </h4>
        <Link
          href="/bisection-method/algorithm"
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
              Enter start value:
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
              Enter end value:
            </label>
            <input
              type="text"
              name="end"
              placeholder="Eg: 5"
              defaultValue={variables['x2']}
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
          >
            Submit
          </button>
          <br />
        </form>

        <br />

        <FallbackSolution f={f} f1={f1} f2={f2} />

        <FalsePositionSolution
          f={f}
          x1={x1}
          x2={x2}
          tolerance={tolerance}
          max={max}
          precision={precision}
        />

        <br />
        <div id="calc-table"></div>
        <div id="root"></div>
      </div>
    </div>
  );
}
