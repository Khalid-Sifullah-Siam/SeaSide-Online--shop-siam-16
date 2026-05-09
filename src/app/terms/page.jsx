import Link from "next/link";

const TermsAndConditionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 py-12 px-4">

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-red-800">
            Terms & Conditions
          </h1>
          <p className="text-red-800 mt-2 text-sm md:text-base">
            Please read these terms carefully before using our service
          </p>
          <p className="text-xs text-red-800 mt-1">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-red-800 leading-7 text-sm md:text-base">

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using our website, you agree to be bound by these
              Terms & Conditions and all applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              2. Use of Our Service
            </h2>
            <p>
              You agree to use our ecommerce platform only for lawful purposes
              and not to misuse or disrupt the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              3. User Accounts
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and password and for all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              4. Orders & Payments
            </h2>
            <p>
              All orders are subject to availability and confirmation of the
              order price. We reserve the right to refuse or cancel orders.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              5. Returns & Refunds
            </h2>
            <p>
              Refunds are provided according to our Refund Policy. Products must
              be returned in original condition.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              We are not responsible for any indirect damages or losses arising
              from the use of our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, contact us at{" "}
              <span className="font-medium">
                support@seaside.com
              </span>
            </p>
          </section>

        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="bg-red-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-900 transition duration-300"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditionPage;