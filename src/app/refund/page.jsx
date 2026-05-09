import Link from "next/link";

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 py-12 px-4">

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-red-800">
            Refund Policy
          </h1>
          <p className="text-red-800 mt-2 text-sm md:text-base">
            Easy and transparent refund process
          </p>
          <p className="text-xs text-red-800 mt-1">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-red-800 leading-7 text-sm md:text-base">

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              1. Eligibility for Refund
            </h2>
            <p>
              Products are eligible for refund if they are damaged, defective,
              or not as described at the time of delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              2. Refund Request Time
            </h2>
            <p>
              Refund requests must be submitted within 7 days of receiving the product.
              Requests after this period may not be accepted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              3. Refund Process
            </h2>
            <p>
              Once your request is approved, the refund will be processed to your
              original payment method within 5–10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              4. Non-Refundable Items
            </h2>
            <p>
              Certain items such as sale products, gift cards, and used goods
              are not eligible for refunds.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              5. Exchange Option
            </h2>
            <p>
              If a product is defective, you may choose to exchange it instead
              of a refund depending on availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              6. Contact Support
            </h2>
            <p>
              For refund-related queries, contact us at{" "}
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

export default RefundPolicyPage;