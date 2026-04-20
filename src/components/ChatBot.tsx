import { useState, useRef, useEffect } from 'react'

/* ─── TYPES ─── */
type Role = 'bot' | 'user'
interface Msg { role: Role; text: string; suggestions?: string[] }

/* ─── KNOWLEDGE BASE ─── */
interface Intent {
  id: string
  keywords: string[]
  response: string
  suggestions: string[]
}

const intents: Intent[] = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'hola', 'olá', 'greetings', 'start'],
    response: `Welcome to Aga Khan Academy Maputo! 👋 I'm here to help you with any questions about our school. I can assist with admissions, academic programmes, fees, campus life, and much more. What would you like to know?`,
    suggestions: ['How do I apply?', 'What programmes do you offer?', 'What are the school fees?', 'Where is the school located?'],
  },
  {
    id: 'admissions',
    keywords: ['apply', 'application', 'enrol', 'enroll', 'admission', 'admissions', 'join', 'register', 'registration', 'how to apply', 'entry', 'intake'],
    response: `Applying to AKA Maputo is a straightforward four-step process:\n\n1. **Enquire** — Submit an enquiry form or email admissions@akamaputo.org. We'll send you our prospectus and invite you for a campus tour.\n\n2. **Apply** — Complete the online pre-application form with student and parent details. Submit academic records, recommendations, passport copy and birth certificate.\n\n3. **Assessment** — Shortlisted applicants sit entrance assessments in English and Mathematics, followed by a family interview.\n\n4. **Enrol** — Successful applicants receive a formal offer. A non-refundable enrolment fee secures your place.\n\nWe accept applications year-round for all year groups from Early Years through Grade 11. Would you like more information on any of these steps?`,
    suggestions: ['What documents do I need?', 'When is the application deadline?', 'What are entry requirements?', 'Is there financial aid?'],
  },
  {
    id: 'requirements',
    keywords: ['requirement', 'requirements', 'document', 'documents', 'need', 'criteria', 'qualification', 'eligible', 'eligibility', 'test', 'assessment', 'entrance exam'],
    response: `For admission to AKA Maputo, you will need to provide:\n\n📄 **Academic Records** — Last two years of school reports. DP applicants should provide predicted or recent IB/equivalent grades.\n\n🪪 **Identity Documents** — Certified birth certificate and valid passport (international students) or national ID (Mozambican nationals).\n\n✉️ **References** — Two teacher references submitted directly through our admissions portal.\n\n📝 **Entrance Assessment** — Shortlisted students sit assessments in English, Mathematics and reasoning ability appropriate to their year group.\n\n🗣️ **Family Interview** — A meeting with our Admissions team to understand the student's background and motivations.\n\nFinancial assistance documentation is required separately for bursary applications.`,
    suggestions: ['How do I apply?', 'What are the school fees?', 'Is there a scholarship?', 'What is the IB programme?'],
  },
  {
    id: 'deadline',
    keywords: ['deadline', 'closing date', 'when apply', 'last date', 'cut-off', 'cutoff', 'early application', 'when can i apply', 'when should i apply'],
    response: `AKA Maputo operates rolling admissions throughout the year — there is no single application deadline. However, we strongly recommend applying early:\n\n📅 **Early Application** — Before 31 August for the best placement options for the following academic year.\n\n📅 **Regular Application** — Before 31 December for January intake consideration.\n\n📅 **Late Application** — Accepted subject to availability in the relevant year group.\n\nSpaces in some year groups fill quickly, particularly Grade 11 (IB Diploma). If you are interested in a specific entry point, I recommend contacting admissions as soon as possible.`,
    suggestions: ['How do I apply?', 'What documents do I need?', 'When does the academic year start?'],
  },
  {
    id: 'fees',
    keywords: ['fee', 'fees', 'tuition', 'cost', 'price', 'how much', 'expensive', 'afford', 'pay', 'payment', 'charges', 'annual fee', 'school fees'],
    response: `AKA Maputo fees for the 2026–27 academic year are structured by school level:\n\n🎓 **Kindergarten** (Early Years – Grade 2)\n• Annual Tuition: USD 7,800\n• Activity & Resources: USD 650\n• Books & Materials: USD 380\n• Registration: USD 500\n\n📚 **Primary School** (Grades 3–5 / IB PYP)\n• Annual Tuition: USD 10,400\n• Activity & Resources: USD 820\n• Books & Materials: USD 560\n• Registration: USD 500\n\n🎓 **High School** (Grades 6–12 / IB MYP & DP)\n• Annual Tuition: USD 14,200\n• Activity & Resources: USD 1,050\n• Books & Materials: USD 780\n• IB Exam Fee (DP only): USD 1,300\n• Registration: USD 500\n\n💡 Boarding fees are quoted separately. Payment can be made termly or annually (2% discount for full annual payment). Financial assistance is available.`,
    suggestions: ['Is there financial aid?', 'What is included in the fees?', 'Are there boarding fees?', 'What is the IB programme?'],
  },
  {
    id: 'financial_aid',
    keywords: ['financial aid', 'scholarship', 'bursary', 'bursaries', 'financial assistance', 'afford', 'discount', 'reduce', 'reduction', 'support', 'subsidy', 'grant', 'funding', 'help paying', 'free'],
    response: `AKA Maputo is deeply committed to making quality education accessible. Here's how we support families financially:\n\n💚 **Need-Based Bursaries** — Awarded annually and cover up to 100% of tuition fees for qualifying families. Applications are assessed on financial need and renewed each year.\n\n📋 **How to Apply for Aid** — Submit a financial assistance application alongside your admissions application. Our team assesses household income, assets and circumstances confidentially.\n\n📅 **Timelines** — Financial aid decisions are made alongside admissions offers. Early applicants receive earlier decisions.\n\n🔄 **Renewal** — Aid is reviewed annually. Families must reapply each academic year with updated financial information.\n\nFinancial need is never a barrier to admission for a qualified student. Please contact admissions@akamaputo.org to discuss your situation confidentially.`,
    suggestions: ['How do I apply?', 'What are the school fees?', 'What is the admissions process?'],
  },
  {
    id: 'ib_programme',
    keywords: ['ib', 'international baccalaureate', 'programme', 'programs', 'curriculum', 'pyp', 'myp', 'dp', 'diploma', 'primary years', 'middle years', 'what do you teach', 'what do students study', 'ibdp', 'ibmyp', 'ibpyp'],
    response: `AKA Maputo is an authorised IB World School offering all three IB programmes:\n\n🌱 **IB PYP** — Primary Years Programme (Early Years – Grade 5, ages 3–12)\nA transdisciplinary inquiry framework nurturing the whole child. No formal IB exams — assessment is portfolio-based. Students complete the PYP Exhibition at the end of Grade 5.\n\n🔬 **IB MYP** — Middle Years Programme (Grades 6–10, ages 11–16)\nConnects academic disciplines to real-world contexts across 8 subject groups. Includes a capstone Personal Project in Grade 10.\n\n🎓 **IB DP** — Diploma Programme (Grades 11–12, ages 16–19)\nRigorous two-year pre-university qualification. Students take 6 subjects plus Theory of Knowledge, an Extended Essay and CAS. Maximum score is 45 points — our average is 38.4, well above the global average of 29.9.\n\nOur IB pass rate is 100% for three consecutive years.`,
    suggestions: ['What subjects are offered?', 'What is the average IB score?', 'Where do graduates go?', 'What is CAS?'],
  },
  {
    id: 'subjects',
    keywords: ['subject', 'subjects', 'study', 'studying', 'course', 'courses', 'what subjects', 'maths', 'math', 'science', 'english', 'history', 'geography', 'economics', 'biology', 'chemistry', 'physics', 'arts', 'music', 'french', 'portuguese'],
    response: `AKA Maputo offers a wide range of IB Diploma subjects:\n\n🌍 **Languages** — English A: Literature, English B, Portuguese A, French B\n\n🌐 **Humanities** — History, Geography, Economics, Global Politics\n\n🔬 **Sciences** — Biology, Chemistry, Physics, Environmental Systems & Societies\n\n➗ **Mathematics** — Maths: Analysis & Approaches, Maths: Applications & Interpretation\n\n🎨 **Arts** — Visual Arts, Music, Theatre\n\n💻 **Other** — Computer Science\n\nStudents choose 6 subjects — 3 at Higher Level and 3 at Standard Level — tailored to their university aspirations. Languages of instruction are English and Portuguese throughout the school.`,
    suggestions: ['What is the IB programme?', 'What is the average IB score?', 'Where do graduates go to university?'],
  },
  {
    id: 'results',
    keywords: ['score', 'scores', 'result', 'results', 'grade', 'grades', 'average', 'performance', 'pass rate', 'ibdp results', 'exam results', 'how good', 'ranking', 'rank', 'best school', '45'],
    response: `AKA Maputo consistently achieves outstanding academic results:\n\n🏆 **100% IB Diploma Pass Rate** — Third consecutive year\n\n📊 **Mean Score: 38.4 / 45** — Significantly above the global IB average of 29.9\n\n⭐ **Class of 2026 Highlights:**\n• 5 students scored 40 or above\n• 2 students reached 43 points\n• 32 candidates — all passed\n\n🌍 **Global Ranking** — 3rd AKA campus globally and ranked 1st in Sub-Saharan Africa among IB schools\n\n📈 **Seven students** were named Mozambican National IB Scholars in 2026, with two earning perfect 45-point scores\n\nThese results reflect our teachers' dedication and our students' hard work across all three IB programmes.`,
    suggestions: ['What is the IB programme?', 'Where do graduates go to university?', 'What subjects are offered?'],
  },
  {
    id: 'university',
    keywords: ['university', 'universities', 'college', 'higher education', 'graduate', 'graduates', 'where do students go', 'after school', 'destination', 'destinations', 'placement', 'oxford', 'cambridge', 'ucl', 'toronto', 'usa'],
    response: `AKA Maputo has a 98% university placement rate. Our graduates attend leading institutions worldwide:\n\n🇬🇧 **United Kingdom** — University College London, King's College London\n\n🇨🇦 **Canada** — University of Toronto, McGill University\n\n🇫🇷 **France** — Sciences Po Paris\n\n🇿🇦 **South Africa** — University of Cape Town\n\n🇳🇱 **Netherlands** — Delft University of Technology, University of Amsterdam\n\n🌍 **East Africa & South Asia** — Aga Khan University (Kenya/Pakistan)\n\n🎓 Our strong IB Diploma results (mean 38.4) open doors to top universities in over 45 partner institutions globally. Our university counselling team supports students from Grade 10 through the full application process.`,
    suggestions: ['What is the average IB score?', 'What is the IB programme?', 'What subjects are offered?'],
  },
  {
    id: 'campus',
    keywords: ['campus', 'facilities', 'building', 'buildings', 'school building', 'infrastructure', 'library', 'lab', 'laboratory', 'classroom', 'theatre', 'arts centre', 'performing arts', 'size', 'hectare'],
    response: `AKA Maputo's purpose-built campus covers 5 hectares in the heart of Maputo:\n\n🏫 **Academic Wing** — 14 state-of-the-art classrooms, 4 science laboratories, 2 computer & STEM innovation suites, dedicated design and art studios\n\n📚 **Library & Learning Hub** — 3,000+ volumes, digital research databases, individual study pods, collaborative project spaces\n\n🎭 **Performing Arts Centre** — 200-seat purpose-built theatre, music rehearsal rooms, recording studio, visual arts gallery\n\n🏠 **Boarding Residences** — Separate houses for boys and girls, common rooms, 24/7 houseparent supervision, 200+ boarding capacity\n\n⚽ **Sports Complex** — 2 football pitches, 25m heated pool, 2 indoor basketball courts, 4 tennis courts, 400m athletics track, volleyball courts\n\n☀️ **Sustainability** — Rooftop solar panels, rainwater harvesting, zero single-use plastic policy`,
    suggestions: ['What sports are available?', 'Is boarding available?', 'Where is the school?', 'What activities are there?'],
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'address', 'maputo', 'mozambique', 'find', 'directions', 'map', 'situated', 'located', 'how to get', 'transport', 'bus'],
    response: `AKA Maputo is located in the heart of Maputo, Mozambique:\n\n📍 **Address** — Aga Khan Academy, Maputo, Mozambique\n\n📞 **Telephone** — +258 00 000 000\n\n📧 **General** — info@akamaputo.org\n\n📧 **Admissions** — admissions@akamaputo.org\n\n🚌 **Transport** — School bus routes operate across Maputo. The campus is approximately 30 minutes from Maputo International Airport.\n\n🏫 **Campus Tours** — We warmly welcome prospective families for campus visits. Contact our Admissions Office to schedule a tour — you can also book online through our Apply page.`,
    suggestions: ['How do I apply?', 'Can I book a tour?', 'What are the facilities?', 'How do I contact the school?'],
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'phone', 'call', 'reach', 'number', 'telephone', 'get in touch', 'speak', 'talk', 'message', 'whatsapp'],
    response: `You can reach AKA Maputo through the following channels:\n\n📧 **General Enquiries** — info@akamaputo.org\n\n📧 **Admissions** — admissions@akamaputo.org\n\n📞 **Phone** — +258 00 000 000\n\n🕐 **Office Hours** — Monday to Friday, 7:30am – 5:00pm (CAT)\n\n🌐 **Website** — You're already here! Use our Contact or Apply page to send a direct enquiry.\n\n📍 **In Person** — We encourage prospective families to visit campus. Book a tour through the Admissions page and one of our team members will show you around personally.`,
    suggestions: ['How do I apply?', 'Where is the school?', 'Can I book a campus tour?'],
  },
  {
    id: 'boarding',
    keywords: ['boarding', 'boarder', 'residential', 'dormitory', 'dorm', 'hostel', 'live', 'stay', 'accommodation', 'resident', 'house', 'houseparent'],
    response: `AKA Maputo offers full residential boarding for students from across Mozambique and the region:\n\n🏠 **Boarding Houses** — Separate, modern residences for boys and girls. Single and shared rooms available.\n\n👨‍👩‍👧 **Houseparents** — Dedicated, qualified houseparents live on-site and provide 24/7 pastoral care and supervision.\n\n🍽️ **Meals** — Three balanced meals daily in the school dining hall, plus snacks. Dietary requirements accommodated.\n\n📚 **Supervised Study** — Evening study periods with academic support available.\n\n🎯 **Weekend Activities** — Structured weekend programme including cultural outings, sports, movies, and city excursions.\n\n🌍 **Community** — Over 40 nationalities live and study together, creating a genuinely international community.\n\n💰 **Boarding Fees** — Quoted separately from tuition. Contact admissions@akamaputo.org for the full boarding fee schedule.`,
    suggestions: ['What are the school fees?', 'What facilities are available?', 'How do I apply?'],
  },
  {
    id: 'sports',
    keywords: ['sport', 'sports', 'football', 'soccer', 'swimming', 'basketball', 'tennis', 'athletics', 'volleyball', 'physical', 'pe', 'team', 'competition', 'tournament', 'championship', 'gym', 'pitch', 'pool'],
    response: `AKA Maputo has a vibrant and competitive sports programme:\n\n⚽ **Football** — Two full-size pitches. Our Under-18 squad won the East Africa Schools Championship in 2026, defeating teams from Kenya, Tanzania and Uganda.\n\n🏊 **Swimming** — 25-metre heated pool. National championship participants with an active club programme.\n\n🏀 **Basketball** — 2 indoor courts. Weekly training and inter-academy tournaments.\n\n🎾 **Tennis** — 4 hard courts with regular coaching sessions.\n\n🏃 **Athletics** — 400m running track and full field events facility.\n\n🏐 **Volleyball** — Indoor and outdoor courts.\n\n🏆 We compete in inter-school competitions across Mozambique and regionally in East Africa. All students are expected to participate in physical activity as part of the IB CAS requirement.`,
    suggestions: ['What other activities are available?', 'What is CAS?', 'What are the facilities?'],
  },
  {
    id: 'activities',
    keywords: ['activity', 'activities', 'club', 'clubs', 'extra', 'extracurricular', 'co-curricular', 'after school', 'hobby', 'hobbies', 'what to do', 'things to do', 'mun', 'model un', 'drama', 'music', 'eco', 'coding', 'robotics', 'student council'],
    response: `Life at AKA Maputo extends well beyond the classroom. We offer 30+ clubs and co-curricular activities:\n\n🌍 **Model United Nations (MUN)** — One of Mozambique's most established school MUN conferences. Students also attend MUNs in Nairobi and Hyderabad.\n\n🎭 **Drama & Theatre** — Two major productions per year, plus workshops with visiting Mozambican artists.\n\n🎵 **Music Ensemble** — Classical, jazz and traditional Mozambican music. Choir, band and individual tuition.\n\n🌱 **Eco Council** — Campus composting, beach clean-ups, tree planting and environmental campaigns.\n\n💻 **Coding & Robotics** — Programming workshops, hackathons and an annual robotics challenge.\n\n🏛️ **Student Council** — Elected representatives working directly with school leadership on policy and events.\n\n📰 **Student Magazine** — Student-run termly publication covering news, arts and opinion.\n\n🧪 **Science Club** — Weekly lab sessions and participation in East African science fairs.`,
    suggestions: ['What is CAS?', 'What sports are offered?', 'What is the IB programme?'],
  },
  {
    id: 'cas',
    keywords: ['cas', 'creativity', 'activity', 'service', 'community service', 'volunteering', 'volunteer', 'action', 'reflection', 'service learning'],
    response: `CAS — Creativity, Activity, Service — is a core requirement of the IB Diploma Programme and a central part of life at AKA Maputo:\n\n🎨 **Creativity** — Students explore arts, design, music, writing and cultural projects. AKA Maputo students contribute to theatre productions, photography exhibitions and creative writing publications.\n\n⚽ **Activity** — Physical engagement building health, resilience and teamwork. Includes competitive sport, yoga, hiking and community fitness initiatives. Students complete 200+ CAS hours per year.\n\n🤝 **Service** — Meaningful community engagement in Maputo and beyond — tutoring programmes, hospital visits, environmental campaigns and construction projects in local communities.\n\n📝 **Reflection** — Students document their CAS journey through regular written and verbal reflections, developing the self-awareness that defines ethical leadership.\n\nCAS is not just a requirement — it is how AKA Maputo students discover who they are beyond academia.`,
    suggestions: ['What activities are available?', 'What is the IB programme?', 'What sports are offered?'],
  },
  {
    id: 'arts',
    keywords: ['art', 'arts', 'drama', 'theatre', 'theater', 'music', 'visual', 'painting', 'sculpture', 'dance', 'creative', 'gallery', 'exhibition', 'performance', 'production', 'concert', 'choir', 'band'],
    response: `The Arts are a cornerstone of AKA Maputo's identity:\n\n🎭 **Drama & Theatre** — Two major productions per year in our 200-seat Performing Arts Centre. Our Grade 11 production of Athol Fugard's 'Sizwe Banzi is Dead' sold out in 2026 and received critical acclaim from Maputo audiences.\n\n🎵 **Music** — Western classical and traditional Mozambican music programmes. Choir, jazz band, instrument tuition and an annual music concert.\n\n🎨 **Visual Arts** — Painting, sculpture, photography and design. Students exhibit in our on-campus gallery and participate in national competitions.\n\n💃 **Dance** — Contemporary and traditional Mozambican dance forms integrated into the performing arts programme.\n\n✍️ **Creative Writing** — Literary magazine and creative writing workshops led by visiting authors.\n\n🏆 Our Annual Arts Festival draws the largest audience in Academy history — it is a highlight of the school calendar and is open to the public.`,
    suggestions: ['What activities are available?', 'What is CAS?', 'What are the campus facilities?'],
  },
  {
    id: 'language',
    keywords: ['language', 'languages', 'english', 'portuguese', 'french', 'instruction', 'speak', 'taught', 'bilingual', 'multilingual', 'mother tongue'],
    response: `AKA Maputo is a multilingual learning community:\n\n🇬🇧 **English** — The primary language of instruction across all year groups from Early Years.\n\n🇵🇹 **Portuguese** — Taught as an academic subject from Early Years and is the national language of Mozambique. Portuguese A is available as a full IB Diploma subject.\n\n🇫🇷 **French** — Available as a language B option in the IB Diploma Programme.\n\n🌍 **Mother Tongue Support** — The IB's commitment to multilingualism means students are supported in maintaining their mother tongue languages wherever possible.\n\nWith students from 40+ nationalities, AKA Maputo is a genuinely multilingual community. Many students are bilingual or trilingual by the time they graduate.`,
    suggestions: ['What programmes are offered?', 'What subjects are available?', 'How do I apply?'],
  },
  {
    id: 'about',
    keywords: ['about', 'history', 'founded', 'when', 'established', 'aga khan', 'akdn', 'akam', 'mission', 'values', 'vision', 'who are you', 'what is', 'background', 'story', 'origin'],
    response: `Aga Khan Academy Maputo was established in 2013 as the third Aga Khan Academy globally:\n\n🌍 **Founding** — Opened in 2013, AKA Maputo was the first Academy in sub-Saharan Africa. It follows AKA Mombasa (2003) and AKA Hyderabad (2003).\n\n🏫 **Network** — Part of the Aga Khan Development Network (AKDN), one of the world's leading private development organisations. The Academy network spans Africa, Asia and Europe.\n\n🎯 **Mission** — To develop students of the intellect and character to lead and serve. The Academy is guided by the IB philosophy and the Aga Khan's vision of pluralism, meritocracy and service to society.\n\n🌟 **Today** — Over 500 students from 40+ nationalities, a 100% IB pass rate, and recognition as the top IB school in Sub-Saharan Africa.\n\n💚 **Values** — Academic excellence, ethical leadership, international mindedness, cultural understanding and a commitment to improving life in Mozambique and beyond.`,
    suggestions: ['What programmes are offered?', 'How do I apply?', 'What are the facilities?'],
  },
  {
    id: 'calendar',
    keywords: ['calendar', 'academic year', 'term', 'terms', 'semester', 'holiday', 'holidays', 'vacation', 'break', 'start', 'when school starts', 'school year', 'timetable', 'schedule'],
    response: `AKA Maputo follows a three-term academic year:\n\n📅 **Term 1** — Late January to late April (approximately 15 weeks)\n\n📅 **Term 2** — May to late August (approximately 14 weeks)\n\n📅 **Term 3** — September to December (approximately 14 weeks)\n\n🎄 **Holidays** — School breaks include Christmas/New Year, Easter, and mid-term breaks within each term. Mozambican public holidays are observed.\n\n📝 **Exact Dates** — The full academic calendar for 2026–27 is available from the Admissions Office. Contact info@akamaputo.org or check the school prospectus for confirmed term dates.\n\nNew students generally begin at the start of Term 1 in January, though mid-year admissions are considered.`,
    suggestions: ['How do I apply?', 'When is the application deadline?', 'What is the school timetable?'],
  },
  {
    id: 'uniform',
    keywords: ['uniform', 'dress code', 'clothing', 'wear', 'outfit', 'attire', 'dress', 'clothes', 'what to wear'],
    response: `AKA Maputo students wear a smart school uniform throughout the academic year:\n\n👕 **Daily Uniform** — Includes the Academy's distinctive green and grey colour scheme with the school emblem. Both formal and sports uniforms are required.\n\n⚽ **Sports Kit** — A dedicated sports uniform is worn for PE, sports training and co-curricular activities.\n\n🛍️ **Purchasing** — The full uniform list and approved suppliers are provided to families upon enrolment. Some items are available from the school office directly.\n\nFull details of the uniform policy, including options for different year groups, are provided in the Welcome Pack sent to all newly enrolled families.`,
    suggestions: ['How do I apply?', 'What are the fees?', 'What activities are available?'],
  },
  {
    id: 'teachers',
    keywords: ['teacher', 'teachers', 'staff', 'faculty', 'educator', 'educators', 'qualified', 'international', 'experience', 'head', 'principal', 'leadership'],
    response: `AKA Maputo's teaching staff are highly qualified international educators:\n\n👩‍🏫 **Qualifications** — All teachers hold relevant academic degrees and, where applicable, IB-specific training and authorisation from the International Baccalaureate Organisation.\n\n🌍 **International Faculty** — Our staff come from across the world, bringing diverse perspectives into the classroom — a key part of what makes an AKA education distinctive.\n\n🔄 **Professional Development** — Teachers engage in continuous professional development, including IB workshops, peer learning and collaboration with sister academies in Mombasa and Hyderabad.\n\n🤝 **Pastoral Care** — Beyond the classroom, every student is supported by a form tutor and access to school counsellors for academic and personal wellbeing.\n\n👨‍💼 **Leadership** — The Academy is led by a Principal supported by senior leadership in academics, pastoral care and operations.`,
    suggestions: ['What is the IB programme?', 'What are the facilities?', 'How do I apply?'],
  },
  {
    id: 'scholarship',
    keywords: ['merit scholarship', 'academic scholarship', 'scholarship', 'prize', 'award', 'merit', 'gifted', 'talented', 'top student'],
    response: `AKA Maputo's primary form of financial support is **need-based bursaries** rather than merit scholarships. However:\n\n🏆 **Academic Recognition** — Outstanding students are recognised through the Academy's annual academic awards, IB scholar designations and national recognition programmes (seven students were named Mozambican National IB Scholars in 2026).\n\n💚 **Need-Based Bursaries** — Cover up to 100% of tuition fees for qualifying families regardless of academic standing. The goal is to ensure no talented student is excluded due to financial circumstances.\n\n🌍 **AKDN Philosophy** — The Aga Khan Development Network's approach to education is rooted in meritocracy and access — the best students from any background should have the opportunity to study at AKA Maputo.\n\nFor detailed information on financial assistance, contact admissions@akamaputo.org.`,
    suggestions: ['Is there financial aid?', 'What are the school fees?', 'How do I apply?'],
  },
  {
    id: 'transport',
    keywords: ['transport', 'transportation', 'bus', 'school bus', 'taxi', 'how to get there', 'drive', 'car', 'route', 'pickup', 'pick up', 'drop off'],
    response: `AKA Maputo provides school bus transport for students across Maputo:\n\n🚌 **School Bus Routes** — Bus routes cover the main residential areas of Maputo. Routes and stops are confirmed at the start of each academic year.\n\n✈️ **Airport Transfers** — For boarding students travelling internationally, the Academy arranges or assists with airport transfers from Maputo International Airport (approximately 30 minutes from campus).\n\n🚗 **Private Transport** — Many families choose to drop off and collect students themselves. A safe, supervised drop-off and pick-up zone is provided at the school gate.\n\n📍 **Location** — The campus is centrally located in Maputo, making it accessible from most neighbourhoods by both public and private transport.\n\nFor specific bus route information, contact info@akamaputo.org.`,
    suggestions: ['Where is the school?', 'How do I contact the school?', 'Is boarding available?'],
  },
  {
    id: 'tour',
    keywords: ['tour', 'visit', 'open day', 'open house', 'see the school', 'visit campus', 'come and see', 'book a tour', 'campus visit'],
    response: `We warmly welcome prospective families to visit AKA Maputo!\n\n🗓️ **Campus Tours** — Guided tours are available Monday to Friday during school hours. You'll be shown the academic facilities, boarding houses, sports complex and performing arts centre by a member of our team.\n\n📅 **Open Days** — We host termly open days for prospective families. Contact the Admissions Office for upcoming dates.\n\n📞 **Booking** — To book a tour, email admissions@akamaputo.org or call +258 00 000 000. You can also use the Contact form on our Apply page.\n\n💡 **What to Expect** — Tours last approximately 90 minutes and include a Q&A session with the Admissions team. We encourage students to attend alongside parents.`,
    suggestions: ['How do I apply?', 'Where is the school?', 'How do I contact the school?'],
  },
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'thank you', 'helpful', 'great', 'perfect', 'awesome', 'excellent', 'good', 'okay', 'ok', 'bye', 'goodbye', 'see you', 'done'],
    response: `You're very welcome! 😊 It was my pleasure to help. If you have any more questions — now or in the future — don't hesitate to ask. You can also reach our Admissions team directly at admissions@akamaputo.org. We hope to welcome you to AKA Maputo soon! 🌿`,
    suggestions: ['How do I apply?', 'What are the fees?', 'Book a campus tour'],
  },
]

const WELCOME: Msg = {
  role: 'bot',
  text: `Hello! Welcome to Aga Khan Academy Maputo. 👋\n\nI'm your virtual assistant — ask me anything about our school. I can help with admissions, academic programmes, fees, campus facilities, student life, and much more.`,
  suggestions: ['How do I apply?', 'What programmes do you offer?', 'What are the school fees?', 'Where is the school?'],
}

/* ─── INTENT ENGINE ─── */
function getResponse(input: string): Msg {
  const lower = input.toLowerCase().trim()

  // Score each intent
  let best: { score: number; intent: Intent | null } = { score: 0, intent: null }
  for (const intent of intents) {
    let score = 0
    for (const kw of intent.keywords) {
      if (lower.includes(kw)) score += kw.split(' ').length // multi-word keywords score higher
    }
    if (score > best.score) best = { score, intent }
  }

  if (best.intent && best.score > 0) {
    return { role: 'bot', text: best.intent.response, suggestions: best.intent.suggestions }
  }

  return {
    role: 'bot',
    text: `I'm not sure I understood that — sorry! I can help you with:\n\n• **Admissions** — how to apply, requirements, deadlines\n• **Programmes** — IB PYP, MYP, Diploma\n• **Fees** — tuition, financial aid, bursaries\n• **Campus** — facilities, boarding, location\n• **Student Life** — sports, arts, clubs, CAS\n• **Contact** — phone, email, campus tours\n\nCould you rephrase your question or choose a topic below?`,
    suggestions: ['How do I apply?', 'What are the school fees?', 'What is the IB programme?', 'Where is the school?'],
  }
}

/* ─── FORMAT text with **bold** and newlines ─── */
function formatText(text: string) {
  return text.split('\n').map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g)
    return (
      <span key={i}>
        {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    )
  })
}

/* ─── COMPONENT ─── */
export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([WELCOME])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200)
  }, [open])

  const send = (text: string) => {
    if (!text.trim()) return
    const userMsg: Msg = { role: 'user', text: text.trim() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)
    const delay = 600 + Math.random() * 600
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, getResponse(text)])
    }, delay)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    send(input)
  }

  const lastSuggestions = [...messages].reverse().find(m => m.role === 'bot' && m.suggestions)?.suggestions ?? []

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        className={`cb-fab${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Open chat assistant"
      >
        {open
          ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
          : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        }
        {!open && <span className="cb-fab-badge">Ask me</span>}
      </button>

      {/* CHAT PANEL */}
      {open && (
        <div className="cb-panel">
          {/* Header */}
          <div className="cb-header">
            <div className="cb-header-left">
              <div className="cb-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                  <path d="M8 12h.01M12 12h.01M16 12h.01"/>
                </svg>
              </div>
              <div>
                <div className="cb-header-name">AKA Maputo Assistant</div>
                <div className="cb-header-status"><span className="cb-dot" />Online</div>
              </div>
            </div>
            <button className="cb-close" onClick={() => setOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="cb-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`cb-msg cb-msg-${msg.role}`}>
                {msg.role === 'bot' && <div className="cb-msg-icon">AK</div>}
                <div className="cb-bubble">{formatText(msg.text)}</div>
              </div>
            ))}

            {typing && (
              <div className="cb-msg cb-msg-bot">
                <div className="cb-msg-icon">AK</div>
                <div className="cb-bubble cb-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {lastSuggestions.length > 0 && !typing && (
            <div className="cb-suggestions">
              {lastSuggestions.map((s, i) => (
                <button key={i} className="cb-suggestion" onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <form className="cb-input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className="cb-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask a question…"
              autoComplete="off"
            />
            <button className="cb-send" type="submit" disabled={!input.trim()}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
