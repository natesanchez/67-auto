const countryTexts = [
  {
    country: " Australia",
    language:
      "The company does business in Australia. Australia maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Bahrain",
    language:
      "The company does business in Bahrain. Bahrain maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Canada",
    language:
      "The company does business in Canada. Canada maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Chile",
    language:
      "The company does business in Chile. Chile maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Colombia",
    language:
      "The company does business in Colombia. Colombia maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Costa Rica",
    language:
      "The company does business in Costa Rica. Costa Rica imposes barriers to trade including an inconsistent regulatory environment for investment.",
  },
  {
    country: " Dominican Republic",
    language:
      "The company does business in the Dominican Republic. The Dominican Republic maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Ecuador",
    language:
      "The company does business in Ecuador. Ecuador maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " El Salvador",
    language:
      "The company does business in El Salvador. El Salvador maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Austria",
    language:
      "The company does business in Austria, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Bulgaria",
    language:
      "The company does business in Bulgaria, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Belgium",
    language:
      "The company does business in Belgium, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Czech Republic",
    language:
      "The company does business in the Czech Republic, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Cyprus",
    language:
      "The company does business in Cyprus, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Croatia",
    language:
      "The company does business in Croatia, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Denmark",
    language:
      "The company does business in Denmark, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Estonia",
    language:
      "The company does business in Estonia, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Finland",
    language:
      "The company does business in Finland, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " France",
    language:
      "The company does business in France, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Germany",
    language:
      "The company does business in Germany, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Greece",
    language:
      "The company does business in Greece, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Hungary",
    language:
      "The company does business in Hungary, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Italy",
    language:
      "The company does business in Italy, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Ireland",
    language:
      "The company does business in Ireland, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Latvia",
    language:
      "The company does business in Latvia, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Luxembourg",
    language:
      "The company does business in Luxembourg, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Malta",
    language:
      "The company does business in Malta, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Netherlands",
    language:
      "The company does business in the Netherlands, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Lithuania",
    language:
      "The company does business in Lithuania, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Poland",
    language:
      "The company does business in Poland, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Portugal",
    language:
      "The company does business in Portugal, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Romania",
    language:
      "The company does business in Romania, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Spain",
    language:
      "The company does business in Spain, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Slovakia",
    language:
      "The company does business in Slovakia, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Sweden",
    language:
      "The company does business in Sweden, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Slovenia",
    language:
      "The company does business in Slovenia, which is a member of the European Union (EU). The EU imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " European Union",
    language:
      "The company does business in the European Union (EU). The European Union imposes barriers to trade including data localization requirements that hinder cross-border trade and extensive subsidies to the European aerospace industry.",
  },
  {
    country: " Honduras",
    language:
      "The company does business in Honduras. Honduras few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Hong Kong",
    language:
      "The company does business in Hong Kong. Hong Kong maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Israel",
    language:
      "The company does business in Israel. Israel maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Laos",
    language:
      "The company does business in Laos. Laos maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Malaysia",
    language:
      "The company does business in Malaysia. Malaysia maintains few barriers to trade in goods and services.",
  },
  {
    country: " Mexico",
    language:
      "The company does business in Mexico. Mexico maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " New Zealand",
    language:
      "The company does business in New Zealand. New Zealand maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Oman",
    language:
      "The company does business in Oman. Oman maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Panama",
    language:
      "The company does business in Panama. Panama maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Peru",
    language:
      "The company does business in Peru. Peru maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Singapore",
    language:
      "The company does business in Singapore. The United States Trade Representative (USTR) does not find significant market-wide trade barriers for companies doing business in Singapore.",
  },
  {
    country: " South Africa",
    language:
      "The company does business in South Africa. South Africa maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " Switzerland",
    language:
      "The company does business in Switzerland. Switzerland maintains barriers to trade in regards to digital trade and electronic commerce which limits to the cross-border transfer of personal data of Swiss subjects.",
  },
  {
    country: " Taiwan",
    language:
      "The company does business in Taiwan. Taiwan maintains few barriers to trade in goods and services and few restrictions on foreign capital flows and investment.",
  },
  {
    country: " United Kingdom",
    language:
      "The company does business in the United Kingdom. The United Kingdom imposes barriers to trade including data localization requirements that hinder cross-border trade and subsidies to the aerospace industry.",
  },
  {
    country: " Algeria",
    language:
      "The company does business in Algeria. Algeria imposes barriers to trade including customs delays, data localization requirements, and an investment law that mandates Algerian ownership of at least 51% in all projects involving foreign investments.",
  },
  {
    country: " Angola",
    language:
      "The company does business in Angola. Angola imposes barriers to trade including bans on imports of certain goods, foreign exchange controls, and investment barriers.",
  },
  {
    country: " Argentina",
    language:
      "The company does business in Argentina. Argentina imposes barriers to trade including foreign exchange and capital controls. ",
  },
  {
    country: " Bangladesh",
    language:
      "The company does business in Bangladesh. Bangladesh imposes barriers to trade including prohibitions on foreign involvement in certain economic sectors, investment restrictions, and a lack of enforcement against anticompetitive conduct.",
  },
  {
    country: " Cambodia",
    language:
      "The company does business in Cambodia. Cambodia imposes barriers to trade including arbitrary customs enforcement, restrictions on foreign ownership of property, and widespread smuggling.",
  },
  {
    country: " Cote d'Ivoire",
    language:
      "The company does business in Cote d'Ivoire. Cote d'Ivoire imposes barriers to trade including a lack of regulatory transparency and bans on the import of certain goods.",
  },
  {
    country: " China",
    language:
      "The company does business in China. China imposes barriers to trade including forced technology transfer, limited market access, and investment restrictions.",
  },
  {
    country: " Ethiopia",
    language:
      "The company does business in Ethiopia. Ethiopia maintains barriers to trade including a complex import licensing regime, strict foreign exchange controls, and monopoly control over various sectors by State-owned enterprises (SOE).",
  },
  {
    country: " Myanmar",
    language:
      "The company does business in Myanmar. Myanmar imposes barriers to trade including prohibiting investment in certain sectors, lack of protection of minority investors, and pervasive smuggling.",
  },
  {
    country: " Nigeria",
    language:
      "The company does business in Nigeria. Nigeria imposes barriers to trade including arbitrary customs enforcement and widespread smuggling.",
  },
  {
    country: " Russia",
    language:
      "The company does business in Russia. The United States and Russia currently maintain sanctions against one another. Russia further maintains various barriers to trade including high tariffs, import substitution policies, data localization laws, and favorable market conditions for state-owned enterprises.",
  },
  {
    country: " Saudi Arabia",
    language:
      "The company does business in Saudi Arabia. Saudi Arabia currently prohibits foreign investment in ten sectors, including oil exploration, drilling and security. The country further maintains data localization laws.",
  },
  {
    country: " Vietnam",
    language:
      "The company does business in Vietnam. Vietnam imposes barriers to trade including bans on imports of certain goods, forced data localization, price controls, and investment barriers.",
  },
  {
    country: " Venezuela",
    language:
      "The company does business in Venezuela. Venezuela is considered to have little formal, large-scale, private sector cross-border trade whether due to government restrictions, armed conflict, or natural disaster.",
  },
  {
    country: " Bolivia",
    language:
      "The company does business in Bolivia. Bolivia imposes barriers to trade including investment barriers in strategic sectors, restrictions on the level of foreign employees, and  limit on foreign companies’ access to international arbitration in cases of conflicts with the government.",
  },
  {
    country: " Brazil",
    language:
      "The company does business in Brazil. Brazil imposes barriers to trade including bans on certain imported goods and double taxation of imports.",
  },
  {
    country: " Brunei",
    language:
      "The company does business in Brunei. Brunei imposes barriers to trade including localization requirements, a lack of transparency, and a restriction on foreign land ownership.",
  },
  {
    country: " Egypt",
    language:
      "The company does business in Egypt. Egypt imposes barriers to trade including costly and delayed customs processing, restrictions on foreign equity in certain sectors, and a mandate that 60% of senior executives be Egyptian citizens at information technology (IT) companies.",
  },
  {
    country: " Ghana",
    language:
      "The company does business in Ghana. Ghana maintains barriers to trade including local content and location participation requirements and investment restrictions in key sectors.",
  },
  {
    country: " Guatemala",
    language:
      "The company does business in Guatemala. Guatemala maintains barriers to trade including complex and unclear laws and regulations and inconsistent judicial decisions.",
  },
  {
    country: " India",
    language:
      "The company does business in India. India imposes barriers to trade including significant tariff and nontariff barriers that impede imports of U.S. products into India. Further, India imposes data localization requirements that hinder cross-border digital trade.",
  },
  {
    country: " Indonesia",
    language:
      "The company does business in Indonesia. Indonesia maintains barriers to trade including overlapping import licensing requirements and prohibitions on foreign investment in key sectors.",
  },
  {
    country: " Japan",
    language:
      "The company does business in Japan. Japan imposes barriers to trade including foreign direct investment barriers and a lack of market access in certain sectors.",
  },
  {
    country: " Jordan",
    language:
      "The company does business in Jordan. Jordan imposes barriers to trade including special taxes on various goods, overlapping import licensing requirements, and required localization of information and technology firms.",
  },
  {
    country: " Kenya",
    language:
      "The company does business in Kenya. Kenya imposes barriers to trade including a complex import licensing regime, data localization requirements, and foreign equity participation restrictions.",
  },
  {
    country: " Kuwait",
    language:
      "The company does business in Kuwait. Kuwait imposes limitations on foreign investment in key sectors.",
  },
  {
    country: " Morocco",
    language:
      "The company does business in Morocco. Morocco maintains barriers to trade including irregularities in government procedures.",
  },
  {
    country: " Nicaragua",
    language:
      "The company does business in Nicaragua. Nicaragua imposes barriers to trade including weak government institutions, deficiencies in rule of law, and extensive executive control.",
  },
  {
    country: " Norway",
    language:
      "The company does business in Norway. Norway maintains investment barriers to foreign companies, who must seek prior government approval.",
  },
  {
    country: " Pakistan",
    language:
      "The company does business in Pakistan. Pakistan imposes barriers to digital trade including data localization laws, in addition to periodical blocking to Internet-based services deemed blasphemous or immoral by the federal government.",
  },
  {
    country: " Paraguay",
    language:
      "The company does business in Paraguay. Paraguay maintains investment barriers to foreign companies which requires companies to demonstrate 'just cause' to terminate, modify, or decide not to renew contracts with Paraguayan distributors.",
  },
  {
    country: " Qatar",
    language:
      "The company does business in Qatar. Qatar maintains various barriers to trade including a required import license for the importation of most products, limitations on foreign equity participation, and the requirement of a license to provide Voice over Internet Protocol (VoIP) services, granting such licenses only to companies intending to charter in Qatar.",
  },
  {
    country: " South Korea",
    language:
      "The company does business in South Korea. South Korea imposes barriers to trade including data localization requirements and alleged disproportionate enforcement of anticompetitive laws against foreign entities.",
  },
  {
    country: " Thailand",
    language:
      "The company does business in Thailand. Thailand maintains barriers to trade including high tariff rates, price controls, as well as limitations on foreign equity participation.",
  },
  {
    country: " Philippines",
    language:
      "The company does business in the Philippines. The Philippines maintains barriers to digital trade which requires cloud computing providers to partner with a 60% Philippine owned company in order to participate in a government contract.",
  },
  {
    country: " Tunisia",
    language:
      "The company does business in Tunisia. Tunisia maintains barriers to trade including high tariff rates, barriers to digital trade, restrictions to foreign investors that requires approval by the federal government, and monopolies for state-owned enterprises.",
  },
  {
    country: " Turkey",
    language:
      "The company does business in Turkey. Turkey imposes barriers to trade including import restrictions, government procurement restrictions, data localization laws, imposed regulation on the use of encryption on hardware and software systems,  and various investment barriers.",
  },
  {
    country: " Ukraine",
    language:
      "The company does business in Ukraine. Ukraine maintains investment barriers including strict export controls.",
  },
  {
    country: " United Arab Emirates",
    language:
      "The company does business in the United Arab Emirates (UAE). The UAE imposes barriers to digital trade as well as an investment law that mandates a minimum of 51% UAE national ownership.",
  },
];

export default countryTexts;
