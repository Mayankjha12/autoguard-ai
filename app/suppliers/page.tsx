export default function SuppliersPage() {
    const suppliers = [
      {
        name: "Tata Components",
        country: "India",
        material: "Steel",
        quality: "94%",
        leadTime: "12 Days",
        risk: "Low",
      },
      {
        name: "Shanghai SemiTech",
        country: "China",
        material: "Semiconductors",
        quality: "88%",
        leadTime: "27 Days",
        risk: "High",
      },
      {
        name: "Samsung SDI",
        country: "South Korea",
        material: "Battery Cells",
        quality: "96%",
        leadTime: "10 Days",
        risk: "Low",
      },
      {
        name: "Panasonic Energy",
        country: "Japan",
        material: "Battery Packs",
        quality: "92%",
        leadTime: "14 Days",
        risk: "Medium",
      },
    ];
  
    return (
      <div className="min-h-screen bg-[#030712] p-8 text-white">
  
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Supplier Intelligence
          </h1>
  
          <p className="text-slate-400 mt-2">
            AI-powered supplier analytics and monitoring
          </p>
        </div>
  
        {/* KPI CARDS */}
  
        <div className="grid md:grid-cols-4 gap-6 mb-8">
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-slate-400">
              Total Suppliers
            </h3>
  
            <p className="text-4xl font-bold mt-3">
              247
            </p>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-slate-400">
              High Risk
            </h3>
  
            <p className="text-4xl font-bold text-red-400 mt-3">
              18
            </p>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-slate-400">
              Avg Quality
            </h3>
  
            <p className="text-4xl font-bold text-green-400 mt-3">
              91%
            </p>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-slate-400">
              Countries
            </h3>
  
            <p className="text-4xl font-bold mt-3">
              14
            </p>
          </div>
  
        </div>
  
        {/* FILTERS */}
  
        <div className="flex flex-wrap gap-4 mb-8">
  
          <input
            placeholder="Search supplier..."
            className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 w-80"
          />
  
          <select className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3">
            <option>All Countries</option>
          </select>
  
          <select className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3">
            <option>All Materials</option>
          </select>
  
          <select className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3">
            <option>All Risk Levels</option>
          </select>
  
        </div>
  
        {/* TABLE */}
  
        <div className="bg-slate-900 rounded-2xl overflow-hidden">
  
          <table className="w-full">
  
            <thead className="bg-slate-800">
  
              <tr>
                <th className="p-4 text-left">Supplier</th>
                <th>Country</th>
                <th>Material</th>
                <th>Quality</th>
                <th>Lead Time</th>
                <th>Risk</th>
              </tr>
  
            </thead>
  
            <tbody>
  
              {suppliers.map((supplier) => (
                <tr
                  key={supplier.name}
                  className="border-t border-slate-800 hover:bg-slate-800/50"
                >
                  <td className="p-4">
                    {supplier.name}
                  </td>
  
                  <td>{supplier.country}</td>
  
                  <td>{supplier.material}</td>
  
                  <td>{supplier.quality}</td>
  
                  <td>{supplier.leadTime}</td>
  
                  <td>
  
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        supplier.risk === "High"
                          ? "bg-red-500/20 text-red-400"
                          : supplier.risk === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {supplier.risk}
                    </span>
  
                  </td>
                </tr>
              ))}
  
            </tbody>
  
          </table>
  
        </div>
  
        {/* AI ANALYSIS */}
  
        <div className="grid md:grid-cols-3 gap-6 mt-8">
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="font-semibold">
              Top Performing Supplier
            </h3>
  
            <p className="text-cyan-400 text-2xl mt-4">
              Samsung SDI
            </p>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="font-semibold">
              Highest Risk Supplier
            </h3>
  
            <p className="text-red-400 text-2xl mt-4">
              Shanghai SemiTech
            </p>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="font-semibold">
              AI Recommendation
            </h3>
  
            <p className="text-slate-300 mt-4">
              Shift 30% sourcing to Vietnam-based suppliers.
            </p>
          </div>
  
        </div>
  
      </div>
    );
  }