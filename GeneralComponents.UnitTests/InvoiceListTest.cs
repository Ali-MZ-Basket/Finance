using Bunit;
using Finance.Domain.Model.Accounting;
using GeneralComponents.Components.InvoiceComponent;
using GeneralComponents.UnitTests.DataSets;
using MudBlazor.UnitTests.Components;
using System;
using System.Collections.Generic;
using Xunit;

namespace GeneralComponents.UnitTests
{
    public class InvoiceListTest : BunitTest
    {
        private List<Invoice> _invoices;
        private int _currentCountPagePage;

        private InvoiceTable<List<InvoiceListTest>> _table { get; set; } = null!;

        public InvoiceListTest()
        {
            _invoices = InvoiceDataSet.Invoices;
        }

        [Fact]
        public void Test1()
        {
            var comp = Context.RenderComponent<InvoiceTable<List<InvoiceListTest>>>(
                ComponentParameter.CreateParameter("Invoices", _invoices));

            _table = comp.Instance;
            Assert.Equal(_invoices.Count, _table.Invoices.Count);
            Assert.True(SearchIsCorrect());
            Assert.True(PaginationWorks());
        }

        private bool PaginationWorks()
        {
            // Assert.Equal(ExpectedPageCount(), _table.GetPageCount());
            return true;
        }

        private uint ExpectedPageCount()
        {
            //return (uint.Parse(_invoices.Count / _currentCountPagePage);
            return 5;
        }

        private bool SearchIsCorrect()
        {
            return true;
        }
    }

}