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
    /// ContactGroups
    /// </summary>
    [DataContract]
    public partial class ContactGroups :  IEquatable<ContactGroups>, IValidatableObject
    {
        
        /// <summary>
        /// Gets or Sets _ContactGroups
        /// </summary>
        [DataMember(Name="ContactGroups", EmitDefaultValue=false)]
        public List<ContactGroup> _ContactGroups { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ContactGroups {\n");
            sb.Append("  _ContactGroups: ").Append(_ContactGroups).Append("\n");
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
            return this.Equals(input as ContactGroups);
        }

        /// <summary>
        /// Returns true if ContactGroups instances are equal
        /// </summary>
        /// <param name="input">Instance of ContactGroups to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ContactGroups input)
        {
            if (input == null)
                return false;

            return 
                (
                    this._ContactGroups == input._ContactGroups ||
                    this._ContactGroups != null &&
                    input._ContactGroups != null &&
                    this._ContactGroups.SequenceEqual(input._ContactGroups)
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
                if (this._ContactGroups != null)
                    hashCode = hashCode * 59 + this._ContactGroups.GetHashCode();
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
