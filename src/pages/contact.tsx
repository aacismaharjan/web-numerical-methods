import React from 'react';
import '../app/globals.css';

const Contact = () => {
  return (
    <div>
      <h4 className="text-xl font-bold mb-2 text-yellow-400">Contact Us</h4>
      <table className="w-full border-collapse border border-slate-500">
        <thead>
          <tr>
            <th align="left" className="border border-slate-600">
              Full Name
            </th>
            <th align="left" className="border border-slate-600">
              Email Address
            </th>
            <th align="left" className="border border-slate-600">
              Post
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700">Aashish Maharjan</td>
            <td className="border border-slate-700">
              aashish.maharjan021@apexcollege.edu.np
            </td>
            <td className="border border-slate-700">Owner, Developer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
