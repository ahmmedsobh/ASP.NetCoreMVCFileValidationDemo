using ASP.NetCoreMVCFileValidationDemo.ValidationAttributes;

namespace ASP.NetCoreMVCFileValidationDemo.ViewModels
{
    public class UploadFileViewModel
    {
        [AllowedExtensions(new string[] { "png","jpg" })]
        [MaxFileSize(1024*1024*5)]
        public IFormFile? File { get; set; }
    }
}
