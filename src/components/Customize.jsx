import React from 'react'
import SectionTitle from '@/ui/SectionTitle'

export default function Customize() {
  const rows = [
    {
      robot: 'REACH-V1 Robotic Arm',
      armLength: '660mm',
      payload: '1.5kg',
      dof: '7',
      accuracy: '0.05mm',
      weight: '30kg',
      features: 'Dual/Single arm, precise handling, Harmonic Gear DC Motor',
    },
    {
      robot: 'REACH-V2 Robotic Arm',
      armLength: '820mm',
      payload: '3.5kg',
      dof: '7',
      accuracy: '0.28mm',
      weight: '45kg',
      features: 'Dual/Single arm, heavy payload, advanced absolute encoder',
    },
    {
      robot: 'Lite All-Terrain UGV',
      armLength: '–',
      payload: '120kg (max load)',
      dof: '–',
      accuracy: '–',
      weight: '100kg',
      features:
        'Mounting plate for payloads (LIDAR, arms, sensors, etc.); max drag: 150kg',
    },
    {
      robot: 'Advanced All-Terrain UGV',
      armLength: '–',
      payload: '260kg (max load)',
      dof: '–',
      accuracy: '–',
      weight: '180kg',
      features:
        'Robust suspension, high payload, stainless steel body; max drag: 260kg',
    },
    {
      robot: 'Robotic EOAT – Bionic Hand',
      armLength: '–',
      payload: '1.5kg (payload)',
      dof: '10 (per finger)',
      accuracy: '+0.1mm',
      weight: '0.5kg',
      features: 'Fully universal mount, linear actuators, force: 50N/finger',
    },
    {
      robot: 'Robotic EOAT – Precision Gripper',
      armLength: '–',
      payload: '1kg (payload)',
      dof: '2',
      accuracy: '+0.1mm',
      weight: '0.5kg',
      features: 'Universal mount, servo motor, force: 29N/cm, 60mm opening',
    },
  ]

  return (
    <section id="customize" className="bg-white text-black flex flex-col ml-2 mt-10">
      <SectionTitle title="Customize" /><br /><br />

      {/* <p className="text-gray-700">
        Configure our robotic arms, UGVs and EOATs to match your exact
        application. Use the table below to compare options by model, then see
        the ways you can customize for your use-case.
      </p> */}

      <div className="mt-6 overflow-x-auto border-2 border-[#ff6600] rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-[#ff6600] text-white">
            <tr>
              <th className="text-left p-3 font-semibold">Robot</th>
              <th className="text-left p-3 font-semibold">Arm Length</th>
              <th className="text-left p-3 font-semibold">Max Payload (per arm)</th>
              <th className="text-left p-3 font-semibold">Degrees of Freedom</th>
              <th className="text-left p-3 font-semibold">Position Accuracy</th>
              <th className="text-left p-3 font-semibold">Weight</th>
              <th className="text-left p-3 font-semibold">Key Features</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.robot} className="border-t border-[#ff6600]">
                <td className="p-3 font-medium">{r.robot}</td>
                <td className="p-3">{r.armLength}</td>
                <td className="p-3">{r.payload}</td>
                <td className="p-3">{r.dof}</td>
                <td className="p-3">{r.accuracy}</td>
                <td className="p-3">{r.weight}</td>
                <td className="p-3">{r.features}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold">How You Can Customize</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
          <li>
            <strong>Payload Capacity</strong>: Choose arm and UGV models best
            suited to your required weight handling—from precision tasks
            (REACH-V1) to bulk operations (REACH-V2, UGVs).
          </li>
          <li>
            <strong>Reach & Size</strong>: Select from compact (660mm/REACH-V1)
            to extended (820mm/REACH-V2) arms for spatial flexibility.
          </li>
          <li>
            <strong>Degrees of Freedom</strong>: Specify for delicate
            manipulation (up to 10-DOF bionic hand) or simple gripping.
          </li>
          <li>
            <strong>End-of-Arm Tooling</strong>: Integrate custom EOATs for
            specialized tasks (e.g., grippers, bionic hand, sensors).
          </li>
          <li>
            <strong>Robustness for Terrain</strong>: Customize UGVs for
            challenging environments and payload demands.
          </li>
          <li>
            <strong>Dual or Single Arm Configuration</strong>: Opt for single or
            dual-arm setups as per application needs.
          </li>
        </ul>
      </div>
    </section>
  )
}
