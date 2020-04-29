export interface IhaEvent {
  title?: string;
  date: string;
  location?: string;
  endDate?: string;
  imageUrl?: string;
  content?: string;
  url?: string;
}

export const LAST_UPDATED = "11/22/2019";

export const EVENTS: IhaEvent[] = [
  {
    title: "Sensei Iha Okinawa Visit",
    date: "12/27/2018",
    endDate: "02/14/2019",
    location: "none",
  },
  {
    title: "Midwest Pre-Test",
    date: "03/09/2019",
    location: "Hombu Dojo",
  },
  {
    title: "Midwest Pre-Test (voting)",
    date: "04/06/2019",
    location: "Hombu Dojo",
  },
  {
    title: "Okinawa Kenjin Kai Spring Party",
    date: "5/04/2019",
    location: "Charlotte VFW Hall",
  },
  {
    title: "Shidokan Training Seminar",
    date: "2019-05-17T18:00:00",
    endDate: "2019-05-17T20:00:00",
    location: "Holt High School Gym, Main Campus. 5885 Holt Rd, Holt MI 48842",
  },
  {
    title: "Instructor Meeting",
    date: "2019-05-17T20:30:00",
    endDate: "2019-05-17T22:00:00",
    location: "Holt Dojo. 2002 Cedar St., Holt MI 48842",
    content: "Instructors invited to meeting: Hanshi, Kyoshi, Shibu, Fuku.",
  },
  {
    title: "Instructor Training",
    date: "2019-05-18T09:30:00",
    endDate: "2019-05-18T10:50:00",
    location: "Hope Middle School Gym, 2020 Park Ln, Holt, MI 48842",
    content: "Instructors Invited to Training: Hanshi, Kyoshi, Shihan, Shibu, Fuku.",
  },
  {
    title: "Dan Test",
    date: "2019-05-18T12:00:00",
    location: "Hope Middle School Gym, 2020 Park Ln, Holt, MI 48842",
    content: "Testing candidates may arrive to warm up at 11:00am.",
  },
  {
    title: "Post Test Banquet",
    date: "2019-05-18T16:00:00",
    location: "Fireside Grille, 6951 Lansing Rd, Dimondale, MI 48821",
    content: "RSVP by Wednesday May 15th, 5:00pm.",
  },
  {
    title: "Midwest Pre-Test",
    date: "08/03/2019",
  },
  {
    title: "Midwest Pre-Test (voting)",
    date: "09/14/2019",
    location: "Hombu Dojo",
  },
  {
    title: "Shidokan Seminar",
    date: "2019-10-18T18:00:00",
    endDate: "2019-10-18T20:00:00",
    location: "Holt Junior High School Gym. 1784 Aurelius Road, Holt MI 48842",
    content: `
      <a href="https://events.membersolutions.com/event_register.asp?content_id=79897" target="_blank">Register here.</a>
    `,
  },
  {
    title: "Dan Test",
    date: "2019-10-19T12:00:00",
    location: "Hombu Dojo",
  },
  {
    title: "Sensei Iha Tookachi",
    date: "8/21/2019",
    location: "Naha, Okinawa",
    endDate: "8/30/2019",
    url: "http://ihatookachi2019.com",
    imageUrl: "assets/events/2019/tookachi-event.png",
    content: `
      Sensei Iha's Tookachi (88th birthday) celebration.
    `,
  },
  {
    title: "East Coast Seminar",
    location: "Maywood Karate, 49 West Pleasant Ave, Maywood NJ",
    date: "4/12/2019",
    endDate: "4/13/2019",
    content: `Hosted by Maywood Dojo, celebrating their 30th Anniversary.`,
    url: "http://maywoodkarate.com",
  },
  {
    title: "Canada Seminar",
    location: "Grand River Karate, 53 Allen St. E., Waterloo, ON, Canada",
    date: "5/31/2019",
    endDate: "6/1/2019",
    content: `Hosted by Grand River Dojo, celebrating their 25th Anniversary
      and 15 years with Beikoku Shidokan.`,
    url: "http://grandriverkarate.com",
  },
  {
    title: "Miyazato Karatedo 60th Anniversary Celebration",
    date: "11/05/2019",
    endDate: "11/13/2019",
    location: "Cordoba, Argentina",
    imageUrl: "assets/events/2019/argentina60.png",
  },
  {
    title: "St. Louis Seminar",
    date: "12/06/2019",
    endDate: "12/07/2019",
    location: "St. Louis, Missouri",
  },
  {
    title: "Shidokan Tampa Seminar",
    date: "02/21/2020",
    endDate: "02/22/2020",
    location: "Bob Gilbertson Central City Family YMCA, 110 East Palm Ave., Tampa, FL 33602",
    content: `Open to all Beikoku Shidokan members. RSVP to <a href="mailto:shidokantampa@gmail.com">shidokantampa@gmail.com</a>.`,
    imageUrl: "assets/events/2020/tampa-seminar.jpg",
  },
  {
    title: "Dan Test",
    date: "3/28/2020",
    location: "none",
    content: `<div class="alert alert-warning">
      The test has been postponed due to the Coronavirus outbreak.
      The test will be held individually by each Shibu Dojo. Iha Sensei will view
      the testing via remote video.</div>`,
  },
  {
    title: "East Coast Seminar",
    location: "Fairlawn, New Jersey",
    date: "4/17/2020",
    endDate: "4/18/2020",
    content: `<div class="alert alert-warning">The event has been cancelled due to the Coronavirus outbreak.</div>`,
  },
  {
    title: "Dan Test",
    location: "none",
    date: "07/30/2020",
    content: `<div class="alert alert-warning">The event has been cancelled due to the Coronavirus outbreak.</div>`,
  },
  {
    title: "National Training Seminar (NTS)",
    location: "Lansing, Michigan",
    date: "07/31/2020",
    endDate: "08/02/2020",
    content: `<div class="alert alert-warning">The event has been cancelled due to the Coronavirus outbreak.</div>`,
  },
  {
    title: "Canada Seminar",
    location: "Guelph, Canada",
    date: "10/02/2020",
    endDate: "10/04/2020",
  },
  {
    title: "Dan Test",
    location: "Michigan, TBD",
    date: "11/21/2020",
  },
];
