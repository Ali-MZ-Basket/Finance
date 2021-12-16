/* 
 * Xero Accounting API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * Contact: api@xero.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Finance.Domain.Client.OpenAPIDateConverter;

namespace Finance.Domain.Model.Accounting
{
    /// <summary>
    /// PurchaseOrder
    /// </summary>
    [DataContract]
    public partial class PurchaseOrder :  IEquatable<PurchaseOrder>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets LineAmountTypes
        /// </summary>
        [DataMember(Name="LineAmountTypes", EmitDefaultValue=false)]
        public LineAmountTypes LineAmountTypes { get; set; }
        /// <summary>
        /// Gets or Sets CurrencyCode
        /// </summary>
        [DataMember(Name="CurrencyCode", EmitDefaultValue=false)]
        public CurrencyCode CurrencyCode { get; set; }
        /// <summary>
        /// See Purchase Order Status Codes
        /// </summary>
        /// <value>See Purchase Order Status Codes</value>
        [JsonConverter(typeof(Client.CustomStringEnumConverter))]
        public enum StatusEnum
        {
            /// <summary>
            /// Enum DRAFT for value: DRAFT
            /// </summary>
            [EnumMember(Value = "DRAFT")]
            DRAFT = 1,

            /// <summary>
            /// Enum SUBMITTED for value: SUBMITTED
            /// </summary>
            [EnumMember(Value = "SUBMITTED")]
            SUBMITTED = 2,

            /// <summary>
            /// Enum AUTHORISED for value: AUTHORISED
            /// </summary>
            [EnumMember(Value = "AUTHORISED")]
            AUTHORISED = 3,

            /// <summary>
            /// Enum BILLED for value: BILLED
            /// </summary>
            [EnumMember(Value = "BILLED")]
            BILLED = 4,

            /// <summary>
            /// Enum DELETED for value: DELETED
            /// </summary>
            [EnumMember(Value = "DELETED")]
            DELETED = 5

        }

        /// <summary>
        /// See Purchase Order Status Codes
        /// </summary>
        /// <value>See Purchase Order Status Codes</value>
        [DataMember(Name="Status", EmitDefaultValue=false)]
        public StatusEnum Status { get; set; }
        
        /// <summary>
        /// Gets or Sets Contact
        /// </summary>
        [DataMember(Name="Contact", EmitDefaultValue=false)]
        public Contact Contact { get; set; }

        /// <summary>
        /// See LineItems
        /// </summary>
        /// <value>See LineItems</value>
        [DataMember(Name="LineItems", EmitDefaultValue=false)]
        public List<LineItem> LineItems { get; set; }

        /// <summary>
        /// Date purchase order was issued – YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation
        /// </summary>
        /// <value>Date purchase order was issued – YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation</value>
        [DataMember(Name="Date", EmitDefaultValue=false)]
        public DateTime? Date { get; set; }

        /// <summary>
        /// Date the goods are to be delivered – YYYY-MM-DD
        /// </summary>
        /// <value>Date the goods are to be delivered – YYYY-MM-DD</value>
        [DataMember(Name="DeliveryDate", EmitDefaultValue=false)]
        public DateTime? DeliveryDate { get; set; }

        /// <summary>
        /// Unique alpha numeric code identifying purchase order (when missing will auto-generate from your Organisation Invoice Settings)
        /// </summary>
        /// <value>Unique alpha numeric code identifying purchase order (when missing will auto-generate from your Organisation Invoice Settings)</value>
        [DataMember(Name="PurchaseOrderNumber", EmitDefaultValue=false)]
        public string PurchaseOrderNumber { get; set; }

        /// <summary>
        /// Additional reference number
        /// </summary>
        /// <value>Additional reference number</value>
        [DataMember(Name="Reference", EmitDefaultValue=false)]
        public string Reference { get; set; }

        /// <summary>
        /// See BrandingThemes
        /// </summary>
        /// <value>See BrandingThemes</value>
        [DataMember(Name="BrandingThemeID", EmitDefaultValue=false)]
        public Guid? BrandingThemeID { get; set; }

        /// <summary>
        /// Boolean to set whether the purchase order should be marked as “sent”. This can be set only on purchase orders that have been approved or billed
        /// </summary>
        /// <value>Boolean to set whether the purchase order should be marked as “sent”. This can be set only on purchase orders that have been approved or billed</value>
        [DataMember(Name="SentToContact", EmitDefaultValue=false)]
        public bool? SentToContact { get; set; }

        /// <summary>
        /// The address the goods are to be delivered to
        /// </summary>
        /// <value>The address the goods are to be delivered to</value>
        [DataMember(Name="DeliveryAddress", EmitDefaultValue=false)]
        public string DeliveryAddress { get; set; }

        /// <summary>
        /// The person that the delivery is going to
        /// </summary>
        /// <value>The person that the delivery is going to</value>
        [DataMember(Name="AttentionTo", EmitDefaultValue=false)]
        public string AttentionTo { get; set; }

        /// <summary>
        /// The phone number for the person accepting the delivery
        /// </summary>
        /// <value>The phone number for the person accepting the delivery</value>
        [DataMember(Name="Telephone", EmitDefaultValue=false)]
        public string Telephone { get; set; }

        /// <summary>
        /// A free text feild for instructions (500 characters max)
        /// </summary>
        /// <value>A free text feild for instructions (500 characters max)</value>
        [DataMember(Name="DeliveryInstructions", EmitDefaultValue=false)]
        public string DeliveryInstructions { get; set; }

        /// <summary>
        /// The date the goods are expected to arrive.
        /// </summary>
        /// <value>The date the goods are expected to arrive.</value>
        [DataMember(Name="ExpectedArrivalDate", EmitDefaultValue=false)]
        public DateTime? ExpectedArrivalDate { get; set; }

        /// <summary>
        /// Xero generated unique identifier for purchase order
        /// </summary>
        /// <value>Xero generated unique identifier for purchase order</value>
        [DataMember(Name="PurchaseOrderID", EmitDefaultValue=false)]
        public Guid? PurchaseOrderID { get; set; }

        /// <summary>
        /// The currency rate for a multicurrency purchase order. If no rate is specified, the XE.com day rate is used.
        /// </summary>
        /// <value>The currency rate for a multicurrency purchase order. If no rate is specified, the XE.com day rate is used.</value>
        [DataMember(Name="CurrencyRate", EmitDefaultValue=false)]
        public decimal? CurrencyRate { get; set; }

        /// <summary>
        /// Total of purchase order excluding taxes
        /// </summary>
        /// <value>Total of purchase order excluding taxes</value>
        [DataMember(Name="SubTotal", EmitDefaultValue=false)]
        public decimal? SubTotal { get; private set; }

        /// <summary>
        /// Total tax on purchase order
        /// </summary>
        /// <value>Total tax on purchase order</value>
        [DataMember(Name="TotalTax", EmitDefaultValue=false)]
        public decimal? TotalTax { get; private set; }

        /// <summary>
        /// Total of Purchase Order tax inclusive (i.e. SubTotal + TotalTax)
        /// </summary>
        /// <value>Total of Purchase Order tax inclusive (i.e. SubTotal + TotalTax)</value>
        [DataMember(Name="Total", EmitDefaultValue=false)]
        public decimal? Total { get; private set; }

        /// <summary>
        /// Total of discounts applied on the purchase order line items
        /// </summary>
        /// <value>Total of discounts applied on the purchase order line items</value>
        [DataMember(Name="TotalDiscount", EmitDefaultValue=false)]
        public decimal? TotalDiscount { get; private set; }

        /// <summary>
        /// boolean to indicate if a purchase order has an attachment
        /// </summary>
        /// <value>boolean to indicate if a purchase order has an attachment</value>
        [DataMember(Name="HasAttachments", EmitDefaultValue=false)]
        public bool? HasAttachments { get; private set; }

        /// <summary>
        /// Last modified date UTC format
        /// </summary>
        /// <value>Last modified date UTC format</value>
        [DataMember(Name="UpdatedDateUTC", EmitDefaultValue=false)]
        public DateTime? UpdatedDateUTC { get; private set; }

        /// <summary>
        /// A string to indicate if a invoice status
        /// </summary>
        /// <value>A string to indicate if a invoice status</value>
        [DataMember(Name="StatusAttributeString", EmitDefaultValue=false)]
        public string StatusAttributeString { get; set; }

        /// <summary>
        /// Displays array of validation error messages from the API
        /// </summary>
        /// <value>Displays array of validation error messages from the API</value>
        [DataMember(Name="ValidationErrors", EmitDefaultValue=false)]
        public List<ValidationError> ValidationErrors { get; set; }

        /// <summary>
        /// Displays array of warning messages from the API
        /// </summary>
        /// <value>Displays array of warning messages from the API</value>
        [DataMember(Name="Warnings", EmitDefaultValue=false)]
        public List<ValidationError> Warnings { get; set; }

        /// <summary>
        /// Displays array of attachments from the API
        /// </summary>
        /// <value>Displays array of attachments from the API</value>
        [DataMember(Name="Attachments", EmitDefaultValue=false)]
        public List<Attachment> Attachments { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PurchaseOrder {\n");
            sb.Append("  Contact: ").Append(Contact).Append("\n");
            sb.Append("  LineItems: ").Append(LineItems).Append("\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  DeliveryDate: ").Append(DeliveryDate).Append("\n");
            sb.Append("  LineAmountTypes: ").Append(LineAmountTypes).Append("\n");
            sb.Append("  PurchaseOrderNumber: ").Append(PurchaseOrderNumber).Append("\n");
            sb.Append("  Reference: ").Append(Reference).Append("\n");
            sb.Append("  BrandingThemeID: ").Append(BrandingThemeID).Append("\n");
            sb.Append("  CurrencyCode: ").Append(CurrencyCode).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  SentToContact: ").Append(SentToContact).Append("\n");
            sb.Append("  DeliveryAddress: ").Append(DeliveryAddress).Append("\n");
            sb.Append("  AttentionTo: ").Append(AttentionTo).Append("\n");
            sb.Append("  Telephone: ").Append(Telephone).Append("\n");
            sb.Append("  DeliveryInstructions: ").Append(DeliveryInstructions).Append("\n");
            sb.Append("  ExpectedArrivalDate: ").Append(ExpectedArrivalDate).Append("\n");
            sb.Append("  PurchaseOrderID: ").Append(PurchaseOrderID).Append("\n");
            sb.Append("  CurrencyRate: ").Append(CurrencyRate).Append("\n");
            sb.Append("  SubTotal: ").Append(SubTotal).Append("\n");
            sb.Append("  TotalTax: ").Append(TotalTax).Append("\n");
            sb.Append("  Total: ").Append(Total).Append("\n");
            sb.Append("  TotalDiscount: ").Append(TotalDiscount).Append("\n");
            sb.Append("  HasAttachments: ").Append(HasAttachments).Append("\n");
            sb.Append("  UpdatedDateUTC: ").Append(UpdatedDateUTC).Append("\n");
            sb.Append("  StatusAttributeString: ").Append(StatusAttributeString).Append("\n");
            sb.Append("  ValidationErrors: ").Append(ValidationErrors).Append("\n");
            sb.Append("  Warnings: ").Append(Warnings).Append("\n");
            sb.Append("  Attachments: ").Append(Attachments).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as PurchaseOrder);
        }

        /// <summary>
        /// Returns true if PurchaseOrder instances are equal
        /// </summary>
        /// <param name="input">Instance of PurchaseOrder to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PurchaseOrder input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Contact == input.Contact ||
                    (this.Contact != null &&
                    this.Contact.Equals(input.Contact))
                ) && 
                (
                    this.LineItems == input.LineItems ||
                    this.LineItems != null &&
                    input.LineItems != null &&
                    this.LineItems.SequenceEqual(input.LineItems)
                ) && 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.DeliveryDate == input.DeliveryDate ||
                    (this.DeliveryDate != null &&
                    this.DeliveryDate.Equals(input.DeliveryDate))
                ) && 
                (
                    this.LineAmountTypes == input.LineAmountTypes ||
                    this.LineAmountTypes.Equals(input.LineAmountTypes)
                ) && 
                (
                    this.PurchaseOrderNumber == input.PurchaseOrderNumber ||
                    (this.PurchaseOrderNumber != null &&
                    this.PurchaseOrderNumber.Equals(input.PurchaseOrderNumber))
                ) && 
                (
                    this.Reference == input.Reference ||
                    (this.Reference != null &&
                    this.Reference.Equals(input.Reference))
                ) && 
                (
                    this.BrandingThemeID == input.BrandingThemeID ||
                    (this.BrandingThemeID != null &&
                    this.BrandingThemeID.Equals(input.BrandingThemeID))
                ) && 
                (
                    this.CurrencyCode == input.CurrencyCode ||
                    this.CurrencyCode.Equals(input.CurrencyCode)
                ) && 
                (
                    this.Status == input.Status ||
                    this.Status.Equals(input.Status)
                ) && 
                (
                    this.SentToContact == input.SentToContact ||
                    (this.SentToContact != null &&
                    this.SentToContact.Equals(input.SentToContact))
                ) && 
                (
                    this.DeliveryAddress == input.DeliveryAddress ||
                    (this.DeliveryAddress != null &&
                    this.DeliveryAddress.Equals(input.DeliveryAddress))
                ) && 
                (
                    this.AttentionTo == input.AttentionTo ||
                    (this.AttentionTo != null &&
                    this.AttentionTo.Equals(input.AttentionTo))
                ) && 
                (
                    this.Telephone == input.Telephone ||
                    (this.Telephone != null &&
                    this.Telephone.Equals(input.Telephone))
                ) && 
                (
                    this.DeliveryInstructions == input.DeliveryInstructions ||
                    (this.DeliveryInstructions != null &&
                    this.DeliveryInstructions.Equals(input.DeliveryInstructions))
                ) && 
                (
                    this.ExpectedArrivalDate == input.ExpectedArrivalDate ||
                    (this.ExpectedArrivalDate != null &&
                    this.ExpectedArrivalDate.Equals(input.ExpectedArrivalDate))
                ) && 
                (
                    this.PurchaseOrderID == input.PurchaseOrderID ||
                    (this.PurchaseOrderID != null &&
                    this.PurchaseOrderID.Equals(input.PurchaseOrderID))
                ) && 
                (
                    this.CurrencyRate == input.CurrencyRate ||
                    (this.CurrencyRate != null &&
                    this.CurrencyRate.Equals(input.CurrencyRate))
                ) && 
                (
                    this.SubTotal == input.SubTotal ||
                    (this.SubTotal != null &&
                    this.SubTotal.Equals(input.SubTotal))
                ) && 
                (
                    this.TotalTax == input.TotalTax ||
                    (this.TotalTax != null &&
                    this.TotalTax.Equals(input.TotalTax))
                ) && 
                (
                    this.Total == input.Total ||
                    (this.Total != null &&
                    this.Total.Equals(input.Total))
                ) && 
                (
                    this.TotalDiscount == input.TotalDiscount ||
                    (this.TotalDiscount != null &&
                    this.TotalDiscount.Equals(input.TotalDiscount))
                ) && 
                (
                    this.HasAttachments == input.HasAttachments ||
                    (this.HasAttachments != null &&
                    this.HasAttachments.Equals(input.HasAttachments))
                ) && 
                (
                    this.UpdatedDateUTC == input.UpdatedDateUTC ||
                    (this.UpdatedDateUTC != null &&
                    this.UpdatedDateUTC.Equals(input.UpdatedDateUTC))
                ) && 
                (
                    this.StatusAttributeString == input.StatusAttributeString ||
                    (this.StatusAttributeString != null &&
                    this.StatusAttributeString.Equals(input.StatusAttributeString))
                ) && 
                (
                    this.ValidationErrors == input.ValidationErrors ||
                    this.ValidationErrors != null &&
                    input.ValidationErrors != null &&
                    this.ValidationErrors.SequenceEqual(input.ValidationErrors)
                ) && 
                (
                    this.Warnings == input.Warnings ||
                    this.Warnings != null &&
                    input.Warnings != null &&
                    this.Warnings.SequenceEqual(input.Warnings)
                ) && 
                (
                    this.Attachments == input.Attachments ||
                    this.Attachments != null &&
                    input.Attachments != null &&
                    this.Attachments.SequenceEqual(input.Attachments)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Contact != null)
                    hashCode = hashCode * 59 + this.Contact.GetHashCode();
                if (this.LineItems != null)
                    hashCode = hashCode * 59 + this.LineItems.GetHashCode();
                if (this.Date != null)
                    hashCode = hashCode * 59 + this.Date.GetHashCode();
                if (this.DeliveryDate != null)
                    hashCode = hashCode * 59 + this.DeliveryDate.GetHashCode();
                hashCode = hashCode * 59 + this.LineAmountTypes.GetHashCode();
                if (this.PurchaseOrderNumber != null)
                    hashCode = hashCode * 59 + this.PurchaseOrderNumber.GetHashCode();
                if (this.Reference != null)
                    hashCode = hashCode * 59 + this.Reference.GetHashCode();
                if (this.BrandingThemeID != null)
                    hashCode = hashCode * 59 + this.BrandingThemeID.GetHashCode();
                hashCode = hashCode * 59 + this.CurrencyCode.GetHashCode();
                hashCode = hashCode * 59 + this.Status.GetHashCode();
                if (this.SentToContact != null)
                    hashCode = hashCode * 59 + this.SentToContact.GetHashCode();
                if (this.DeliveryAddress != null)
                    hashCode = hashCode * 59 + this.DeliveryAddress.GetHashCode();
                if (this.AttentionTo != null)
                    hashCode = hashCode * 59 + this.AttentionTo.GetHashCode();
                if (this.Telephone != null)
                    hashCode = hashCode * 59 + this.Telephone.GetHashCode();
                if (this.DeliveryInstructions != null)
                    hashCode = hashCode * 59 + this.DeliveryInstructions.GetHashCode();
                if (this.ExpectedArrivalDate != null)
                    hashCode = hashCode * 59 + this.ExpectedArrivalDate.GetHashCode();
                if (this.PurchaseOrderID != null)
                    hashCode = hashCode * 59 + this.PurchaseOrderID.GetHashCode();
                if (this.CurrencyRate != null)
                    hashCode = hashCode * 59 + this.CurrencyRate.GetHashCode();
                if (this.SubTotal != null)
                    hashCode = hashCode * 59 + this.SubTotal.GetHashCode();
                if (this.TotalTax != null)
                    hashCode = hashCode * 59 + this.TotalTax.GetHashCode();
                if (this.Total != null)
                    hashCode = hashCode * 59 + this.Total.GetHashCode();
                if (this.TotalDiscount != null)
                    hashCode = hashCode * 59 + this.TotalDiscount.GetHashCode();
                if (this.HasAttachments != null)
                    hashCode = hashCode * 59 + this.HasAttachments.GetHashCode();
                if (this.UpdatedDateUTC != null)
                    hashCode = hashCode * 59 + this.UpdatedDateUTC.GetHashCode();
                if (this.StatusAttributeString != null)
                    hashCode = hashCode * 59 + this.StatusAttributeString.GetHashCode();
                if (this.ValidationErrors != null)
                    hashCode = hashCode * 59 + this.ValidationErrors.GetHashCode();
                if (this.Warnings != null)
                    hashCode = hashCode * 59 + this.Warnings.GetHashCode();
                if (this.Attachments != null)
                    hashCode = hashCode * 59 + this.Attachments.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
