import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBIcon,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit";

const FAQs = () => {
  return (
    <section className="py-5 my-5" style={{ backgroundColor: "#faf7f5" }}>
      <MDBContainer className="py-4">
        {/* Title */}
        <div className="text-center mb-5">
          <MDBTypography
            tag="h2"
            className="display-5 fw-bold text-coffee-brown mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked Questions
          </MDBTypography>
          <p className="lead text-muted">
            Everything you need to know about our little cafe
          </p>
        </div>

        {/* Accordion Style FAQs - Much better UX */}
        <MDBRow className="justify-content-center">
          <MDBCol lg="10" xl="8">
            <MDBAccordion flush>

              <MDBAccordionItem collapseId={1} headerTitle={
                <>
                  <MDBIcon fas icon="mug-hot" className="me-3 text-coffee" />
                  Do you have vegan or dairy-free options?
                </>
              }>
                <p className="text-coffee-brown">
                  Yes! We offer <strong>almond, oat, coconut, and soy milk</strong> with no extra charge. 
                  Our vegan pastries include chocolate banana bread, matcha muffins, and coconut scones — baked fresh daily!
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem collapseId={2} headerTitle={
                <>
                  <MDBIcon fas icon="clock" className="me-3 text-coffee" />
                  What are your opening hours?
                </>
              }>
                <p className="text-coffee-brown">
                  We’re open every day from <strong>7:00 AM to 8:00 PM</strong>.<br />
                  On weekends, we stay open until <strong>9:00 PM</strong> because we know you love late-night coffee too
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem collapseId={3} headerTitle={
                <>
                  <MDBIcon fas icon="wifi" className="me-3 text-coffee" />
                  Is there free Wi-Fi?
                </>
              }>
                <p className="text-coffee-brown">
                  Absolutely! Our Wi-Fi is fast and free. Password is written on the chalkboard near the counter — or just ask our baristas with a smile
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem collapseId={4} headerTitle={
                <>
                  <MDBIcon fas icon="dog" className="me-3 text-coffee" />
                  Are pets allowed?
                </>
              }>
                <p className="text-coffee-brown">
                  Yes! We’re pet-friendly! Your furry friends are welcome in our outdoor seating area. 
                  We even have dog treats and water bowls ready
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem collapseId={5} headerTitle={
                <>
                  <MDBIcon fas icon="birthday-cake" className="me-3 text-coffee" />
                  Do you host events or birthdays?
                </>
              }>
                <p className="text-coffee-brown">
                  We’d love to! We offer private bookings for small events (up to 25 people). 
                  Contact Samnita via Telegram or Instagram to reserve your special day
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem collapseId={6} headerTitle={
                <>
                  <MDBIcon fas icon="leaf" className="me-3 text-coffee" />
                  Where do you source your coffee beans?
                </>
              }>
                <p className="text-coffee-brown">
                  We proudly serve <strong>100% Cambodian-grown Arabica beans</strong> from Mondulkiri and Ratanakiri provinces. 
                  Roasted locally with love, every cup supports Cambodian farmers
                </p>
              </MDBAccordionItem>

            </MDBAccordion>
          </MDBCol>
        </MDBRow>

        {/* Final Warm Message */}
        <div className="text-center mt-5">
          <p className="text-muted fs-5">
            Still have questions? Come say hi — we’re always happy to chat over a warm cup
          </p>
        </div>
      </MDBContainer>
    </section>
  );
};

export default FAQs;