using Finance.Domain.Model.Accounting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeneralComponents.UnitTests.DataSets
{
    public static class InvoiceDataSet
    {
        private static char DS = Path.DirectorySeparatorChar;

        public static List<Invoice> Invoices
        {
            get
            {
                var text = File.ReadAllText($".{DS}DataSets{DS}InvoiceDataSet.json");
                List<Invoice> invoices = JsonConvert.DeserializeObject<List<Invoice>>(text)!;
                return invoices;
            }
        }
    }
}
