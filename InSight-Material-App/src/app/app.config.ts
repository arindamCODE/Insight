export class Appconfig{
    public readonly apiformurl = 'http://localhost:5000/';
    public readonly graph_db_post_url="http://localhost:7474/db/data/cypher";
    /* public readonly editor_url ="http://localhost:5050/api/ContentDetails";  */
    /* public readonly editor_url = "http://localhost:5000/api/UserContentDetails"; */
    public readonly editor_url = "http://172.23.238.138:5005/api/ContentDetails";
    //public readonly editor_url  = "http://172.23.238.139:5050";
    /* public readonly editor_url = "http://172.23.238.142:5000/api/UserContentDetails"; */
    /* public readonly editor_url  = "http://172.23.238.171:5000/api/ContentDetails"; */
    public readonly apifav_url='http://localhost:7777/api/favourites/meghna';
    public readonly apifav_url_update = 'http://localhost:7777/api/favourites';
    public readonly searchurl="http://localhost:5500/api/postsearch";
    public readonly fileuploadurl="http://localhost:5050/api/FileSystemUpload";
    public readonly apiUrl = 'http://localhost:8087/api/authentication';
    public readonly apiUrl_register = 'http://localhost:8087/api/register';
    public readonly apiUrl_socialfacebook='http://172.23.238.147:8087/api/facebook';
    /* public readonly apiUrl_socialgoogle='http://localhost:8087/api/google'; */
    public readonly apiUrl_socialgoogle =  "http://172.23.238.138:8087/api/google";
   public readonly amazonUploadUrl="http://localhost:5050/api/AmazonS3Upload";
    public readonly filesDetailsUrl="http://localhost:5050/api/FilesDetails";
    // public readonly apiUrl_settings ='http://localhost:5467/api/settings/';
    // public readonly apiUrl_amazon= 'http://localhost:5467/api/amazons3upload' ;
    // public readonly apiUrl_settingsPhoto= "http://localhost:5467/api/SettingsPhoto/";
    // public readonly apiUrl_settingscontact ='http://localhost:5467/api/settingscontact/';  
    // public readonly apiUrl_settingsdob ='http://localhost:5467/api/settingsdob/'; 
    public readonly apiUrl_email='http://localhost:8087/api/email';
    public readonly apiUrl_password='http://localhost:1234/api/changepassword/';  

    // public readonly editor_url ="http://172.23.238.139:5050/api/ContentDetails";
    // public readonly filesDetailsUrl="http://172.23.238.139:5050/api/FilesDetails";
    // public readonly amazonUploadUrl="http://172.23.238.139:5050/api/AmazonS3Upload";

    public readonly getfileidurl = 'http://localhost:5555/api/UserFileDetails/';
    public readonly getcreatedbyurl = 'http://localhost:5555/api/UserDetails/getbyuserid/';
    public readonly getsharedwithurl = 'http://localhost:5555/api/UserDetails/getbyfirstname/';
    public readonly postincontentshareurl = 'http://localhost:5555/api/ContentShare';
    public readonly apiUrl_settings ='http://172.23.238.219:5467/api/settings/';
    public readonly apiUrl_amazon= 'http://172.23.238.219:5467/api/amazons3upload' ;
    public readonly apiUrl_settingsPhoto= "http://172.23.238.219:5467/api/SettingsPhoto/";
    public readonly apiUrl_settingscontact ='http://172.23.238.219:5467/api/settingscontact/';  
    public readonly apiUrl_settingsdob ='http://172.23.238.219:5467/api/settingsdob/';
  
}