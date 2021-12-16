using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace GeneralComponents.UnitTests.DataSets
{
    public class DataSetTest
    {
        [Fact]
        public void GetInvoicesSuccess()
        {
            var result = InvoiceDataSet.Invoices;

            Assert.True(result.Count > 0);
        }
    }
}
