import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { ChartData, DonationStage } from "../types";

interface InfoSectionProps {
  focusAreasData: ChartData[];
  donationStages: DonationStage[];
  didYouKnowFacts: string[];
}

const InfoSection: React.FC<InfoSectionProps> = ({
  focusAreasData,
  donationStages,
  didYouKnowFacts,
}) => {
  // Transform donation stages for bar chart
  const milestoneData = donationStages.map((stage, index) => ({
    name: stage.label,
    amount: stage.amount,
    color: index === 0 ? "#f472b6" : index === 1 ? "#ec4899" : "#be185d",
  }));

  return (
    <section id="info" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            C'est quoi Octobre Rose ?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Octobre Rose est une campagne annuelle de sensibilisation au cancer
            du sein qui mobilise chaque année des millions de personnes à
            travers le monde. Cette initiative vitale vise à informer, dépister,
            soutenir la recherche et accompagner les femmes touchées par cette
            maladie.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-600">
                Une mobilisation essentielle
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le cancer du sein reste le premier cancer chez la femme.
                Cependant, détecté tôt, il guérit dans plus de 90% des cas.
                C'est pourquoi la sensibilisation et le dépistage précoce sont
                cruciaux.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Grâce aux avancées de la recherche médicale et à l'amélioration
                des traitements, les taux de guérison ne cessent d'augmenter.
                Votre soutien contribue directement à ces progrès remarquables.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-600">
                Notre impact ensemble
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque don, petit ou grand, permet de financer des programmes de
                recherche innovants, d'améliorer l'accès aux soins, et d'offrir
                un soutien psychologique aux patientes et leurs familles. En
                participant à Octobre Rose, vous rejoignez une communauté
                solidaire déterminée à vaincre cette maladie.
              </p>
            </div>
          </div>

          {/* Right Column - Focus Areas Chart */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Répartition de nos actions
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={focusAreasData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {focusAreasData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [`${value}%`, "Pourcentage"]}
                    labelStyle={{ color: "#374151" }}
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {focusAreasData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Milestone Chart */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Objectifs de collecte
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={milestoneData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    axisLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    axisLine={false}
                    tickFormatter={(value) => `${value / 1000}k DA`}
                  />
                  <Tooltip
                    formatter={(value: number) => [
                      `${value.toLocaleString()} DA`,
                      "Objectif",
                    ]}
                    labelStyle={{ color: "#374151" }}
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="amount" fill="#ec4899" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Did You Know Section */}
          <div className="bg-pink-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Le saviez-vous ?
            </h3>
            <div className="space-y-6">
              {didYouKnowFacts.map((fact, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">{fact}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border border-pink-200">
              <p className="text-sm text-gray-600 text-center">
                <strong className="text-pink-600">Rappel important :</strong>{" "}
                Ces informations sont à titre éducatif. Consultez toujours un
                professionnel de santé pour un diagnostic ou des conseils
                médicaux.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Rejoignez le mouvement</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Votre participation à Octobre Rose peut faire la différence.
              Ensemble, nous pouvons sauver des vies et donner de l'espoir aux
              générations futures.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                💪 Sensibilisation
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                🔬 Recherche
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                ❤️ Soutien
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                🌟 Espoir
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
