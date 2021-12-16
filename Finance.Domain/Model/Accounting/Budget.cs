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
    /// Budget
    /// </summary>
    [DataContract]
    public partial class Budget :  IEquatable<Budget>, IValidatableObject
    {
        /// <summary>
        /// Type of Budget. OVERALL or TRACKING
        /// </summary>
        /// <value>Type of Budget. OVERALL or TRACKING</value>
        [JsonConverter(typeof(Client.CustomStringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum OVERALL for value: OVERALL
            /// </summary>
            [EnumMember(Value = "OVERALL")]
            OVERALL = 1,

            /// <summary>
            /// Enum TRACKING for value: TRACKING
            /// </summary>
            [EnumMember(Value = "TRACKING")]
            TRACKING = 2

        }

        /// <summary>
        /// Type of Budget. OVERALL or TRACKING
        /// </summary>
        /// <value>Type of Budget. OVERALL or TRACKING</value>
        [DataMember(Name="Type", EmitDefaultValue=false)]
        public TypeEnum Type { get; set; }
        
        /// <summary>
        /// Xero identifier
        /// </summary>
        /// <value>Xero identifier</value>
        [DataMember(Name="BudgetID", EmitDefaultValue=false)]
        public Guid? BudgetID { get; set; }

        /// <summary>
        /// The Budget description
        /// </summary>
        /// <value>The Budget description</value>
        [DataMember(Name="Description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// UTC timestamp of last update to budget
        /// </summary>
        /// <value>UTC timestamp of last update to budget</value>
        [DataMember(Name="UpdatedDateUTC", EmitDefaultValue=false)]
        public DateTime? UpdatedDateUTC { get; private set; }

        /// <summary>
        /// Gets or Sets BudgetLines
        /// </summary>
        [DataMember(Name="BudgetLines", EmitDefaultValue=false)]
        public List<BudgetLine> BudgetLines { get; set; }

        /// <summary>
        /// Gets or Sets Tracking
        /// </summary>
        [DataMember(Name="Tracking", EmitDefaultValue=false)]
        public List<TrackingCategory> Tracking { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Budget {\n");
            sb.Append("  BudgetID: ").Append(BudgetID).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  UpdatedDateUTC: ").Append(UpdatedDateUTC).Append("\n");
            sb.Append("  BudgetLines: ").Append(BudgetLines).Append("\n");
            sb.Append("  Tracking: ").Append(Tracking).Append("\n");
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
            return this.Equals(input as Budget);
        }

        /// <summary>
        /// Returns true if Budget instances are equal
        /// </summary>
        /// <param name="input">Instance of Budget to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Budget input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.BudgetID == input.BudgetID ||
                    (this.BudgetID != null &&
                    this.BudgetID.Equals(input.BudgetID))
                ) && 
                (
                    this.Type == input.Type ||
                    this.Type.Equals(input.Type)
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.UpdatedDateUTC == input.UpdatedDateUTC ||
                    (this.UpdatedDateUTC != null &&
                    this.UpdatedDateUTC.Equals(input.UpdatedDateUTC))
                ) && 
                (
                    this.BudgetLines == input.BudgetLines ||
                    this.BudgetLines != null &&
                    input.BudgetLines != null &&
                    this.BudgetLines.SequenceEqual(input.BudgetLines)
                ) && 
                (
                    this.Tracking == input.Tracking ||
                    this.Tracking != null &&
                    input.Tracking != null &&
                    this.Tracking.SequenceEqual(input.Tracking)
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
                if (this.BudgetID != null)
                    hashCode = hashCode * 59 + this.BudgetID.GetHashCode();
                hashCode = hashCode * 59 + this.Type.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.UpdatedDateUTC != null)
                    hashCode = hashCode * 59 + this.UpdatedDateUTC.GetHashCode();
                if (this.BudgetLines != null)
                    hashCode = hashCode * 59 + this.BudgetLines.GetHashCode();
                if (this.Tracking != null)
                    hashCode = hashCode * 59 + this.Tracking.GetHashCode();
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
            // Description (string) maxLength
            if(this.Description != null && this.Description.Length > 255)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Description, length must be less than 255.", new [] { "Description" });
            }

            yield break;
        }
    }

}
