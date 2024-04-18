import "./Invoice.css";
export default function Invoice() {
  return (
    <div>
      <form action="" className="pt-10 pl-20 pr-20 pb-20">
        <table>
          <th colSpan="9">
            <div align="right">
              INNOBIMB Infotech Pvt. Ltd.
              <br /> B-41, Mahakali Socity, Near Aura Mall, Trilanga, PINCODE:
              462039
              <br />
              e-mail:innobimbinfotech@gmial.com
              <br />
              Mobile: 8878779174 GSTIN: 23AAGCI3281E1ZV PAN No.: AAGCI3281E
            </div>
          </th>
          <tr>
            <td colSpan="9" align="center">
              Tax Invoice
            </td>
          </tr>
          <tr>
            <td colSpan="7">Bill & Ship To : Location</td>
            <td colSpan="2">Details of Invoice</td>
          </tr>
          <tr>
            <td colSpan="2">Company Name</td>
            <td colSpan="5">TECHNODUXX PRIVATE LIMITED</td>
            <td>Invoice No.</td>
            <td>NKINV-22019</td>
          </tr>
          <tr>
            <td colSpan="2" rowSpan="3">
              Address
            </td>
            <td colSpan="5">H. NO. 105, Jain Nagar Colony</td>
            <td>invoce Date</td>
            <td>18/03/2023</td>
          </tr>
          <tr>
            <td colSpan="5">Bhopal, Madhya Pradesh, India</td>
            <td>Due Date</td>
            <td>24/03/2023</td>
          </tr>
          <tr>
            <td colSpan="5">462030</td>
          </tr>
          <tr>
            <td colSpan="2">State</td>
            <td colSpan="5">Madhya Pradesh</td>
          </tr>
          <tr>
            <td colSpan="2">Country</td>
            <td colSpan="5">India</td>
          </tr>
          <tr>
            <td colSpan="2">Contact Person</td>
            <td colSpan="5">Swati Dubey</td>
          </tr>
          <tr>
            <td colSpan="2">GSTIN</td>
            <td colSpan="5">23AAICT9607R1ZL</td>
          </tr>
          <tr>
            <td colSpan="2">CIN</td>
            <td colSpan="5">U72900MP2021PC058149</td>
            <td>Place Of Supply</td>
            <td>Bhopal</td>
          </tr>
          <tr>
            <td>Sr.No.</td>
            <td colSpan="2">Description</td>
            <td>HSC/SAC</td>
            <td>Qty</td>
            <td>Unit</td>
            <td>Rate</td>
            <td>Amount</td>
            <td>Taxable Value</td>
          </tr>
          <tr>
            <td>1</td>
            <td colSpan="2">
              Information technology (IT) consulting and support services
            </td>
            <td>998313</td>
            <td>1</td>
            <td>1</td>
            <td>40000</td>
            <td colSpan="2">40000</td>
          </tr>
          <tr>
            <td colSpan="8">total Amount without Tax.</td>
            <td>40000</td>
          </tr>
          <tr>
            <td rowSpan="6" colSpan="4">
              Company's Bank Details for RTGS / NEFT <br />
              Bank Name ICICI BANK <br />
              BANK ADDRESS: SHOP NO 8,11 ULTIMATE ARCADE KOLAR ROAD BHOPAL{" "}
              <br />
              CITY :BHOPAL <br />
              STATE : MADHYA PRADESH <br />
              MICR 462229017 <br />
              Account No. 119005001918 <br />
              IFSC ICIC0001190 <br />
            </td>
            <td colSpan="4">CGST</td>
            <td>9%</td>
          </tr>
          <tr>
            <td colSpan="4">SGST</td>
            <td>9%</td>
          </tr>
          <td colSpan="4">IGST</td>
          <td>0.00%</td>
          <tr>
            <td colSpan="4">Total TAX Amount</td>
            <td>7200.00</td>
          </tr>
          <tr>
            <td colSpan="4">Round Off</td>
            <td>0</td>
          </tr>
          <tr>
            <td colSpan="4">Total Amount With Tax.</td>
            <td>47,200</td>
          </tr>
          <tr>
            <td colSpan="9">
              Invoice Amount In Words(INR) - Fourty seven thousand two hundred
              only
            </td>
          </tr>
          <tr>
            <td colSpan="3">PO DESCRIPTION: Resource allocation </td>
            <td colSpan="6">
              For: INNOBIMB Infotech Pvt. Ltd. <br />
              Authorised Signatory and Company Stamp
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
