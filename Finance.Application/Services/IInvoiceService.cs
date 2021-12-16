using Finance.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace Finance.Application.Services
{
    [ServiceContract]
    public interface IInvoiceService
    {
        [OperationContract]
        void Register(InvoiceDto invoice);

        [OperationContract]
        IEnumerable<InvoiceDto> GetAll();

        [OperationContract]
        IEnumerable<InvoiceDto> GetAll(int skip, int take);

        [OperationContract]
        InvoiceDto GetById(Guid id);

        [OperationContract]
        void Update(InvoiceDto invoice);

        [OperationContract]
        void Remove(Guid id);
    }
}
