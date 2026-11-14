/**
 * Single source of truth for practice facts (NAP, stats, credentials).
 * Change a value here and it updates everywhere on the site, including schema.
 */
export const SITE = {
  name: 'XYSculptMD',
  url: 'https://xysculptmd.com',
  doctor: {
    short: 'Dr. Moein',
    full: 'Dr. Babak Moein',
    withCreds: 'Dr. Babak Moein, MD, FACS',
    legalName: 'Babak Moeinolmolki',
  },
  phone: {
    display: '(310) 455-8020',
    tel: '+13104558020',
  },
  address: {
    street: '2080 Century Park East, Suite 501',
    city: 'Los Angeles',
    region: 'CA',
    postal: '90067',
    neighborhood: 'Century City',
    facility: 'Beverly Century Surgical Center',
  },
  hours: 'Mon to Fri, 9am to 5pm. Saturday by appointment.',
  stats: {
    years: '20+',
    maleProcedures: '2,000+',
  },
  credentials: [
    'Board certified in General Surgery; Diplomate, American Board of Cosmetic Surgery',
    'Fellow, American College of Surgeons (FACS)',
    'Double fellowship trained: Laparoscopic Minimally Invasive Surgery and Cosmetic Surgery',
  ],
  financing: 'Cherry, CareCredit, and Alphaeon',
};

export const addressOneLine = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}`;

export const physicianSchema = {
  '@type': 'Physician',
  '@id': `${SITE.url}/#physician`,
  name: SITE.doctor.withCreds,
  alternateName: [SITE.doctor.legalName, SITE.doctor.short],
  medicalSpecialty: ['PlasticSurgery', 'Surgery'],
  telephone: SITE.phone.tel,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postal,
    addressCountry: 'US',
  },
};
