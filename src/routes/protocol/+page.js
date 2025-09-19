export const load = async () => {
  // Später werden diese Daten von Supabase kommen.
  const sampleProtocols = [
    {
      id: 1,
      title: 'Austernpilze',
      strain: 'Taubenblauer Seitling',
      startDate: '2025-09-18',
      status: 'Fruiting'
    },
    {
      id: 2,
      title: 'Shiitake-Block',
      strain: 'Lentinula edodes',
      startDate: '2025-09-10',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Kräuterseitlinge',
      strain: 'Pleurotus eryngii',
      startDate: '2025-08-22',
      status: 'Completed'
    }
  ];
  return {
    protocols: sampleProtocols
  };
};