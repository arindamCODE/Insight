export class Appconfig{
    public readonly apiformurl = 'http://localhost:5000/';
    public readonly graph_db_post_url="http://localhost:7474/db/data/cypher";
    public readonly editor_url ="http://localhost:5050/api/ContentDetails"; 
    //public readonly editor_url = "http://localhost:5050/api/ContentDetails"; //Earlier 5000,UserContentDetails
    public readonly apifav_url='http://localhost:7777/api/favourites/meghna';
    public readonly apifav_url_update = 'http://localhost:7777/api/favourites';
    public readonly searchurl="http://localhost:5500/api/postsearch";
    public readonly fileuploadurl="http://localhost:5050/api/FileSystemUpload";
    public readonly apiUrl = 'http://localhost:8080/api/authentication';
    public readonly apiUrl_register = 'http://localhost:8080/api/register';
    public readonly apiUrl_socialfacebook='http://localhost:8080/api/facebook';
    public readonly apiUrl_socialgoogle='http://localhost:8080/api/google';
    public readonly amazonUploadUrl="http://localhost:5050/api/AmazonS3Upload";
    public readonly filesDetailsUrl="http://localhost:5050/api/FilesDetails";
  
};