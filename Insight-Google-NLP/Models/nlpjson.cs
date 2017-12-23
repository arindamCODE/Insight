using System;
using System.Collections.Generic;
using System.Text;


namespace ContentData{

public class Text
{
    public string content { get; set; }
    public int beginOffset { get; set; }
}

public class Sentence
{
    public Text text { get; set; }
}

public class Text2
{
    public string content { get; set; }
    public int beginOffset { get; set; }
}

public class PartOfSpeech
{
    public string tag { get; set; }
    public string aspect { get; set; }
    public string @case { get; set; }
    public string form { get; set; }
    public string gender { get; set; }
    public string mood { get; set; }
    public string number { get; set; }
    public string person { get; set; }
    public string proper { get; set; }
    public string reciprocity { get; set; }
    public string tense { get; set; }
    public string voice { get; set; }
}

public class DependencyEdge
{
    public int headTokenIndex { get; set; }
    public string label { get; set; }
}

public class Token
{
    public Text2 text { get; set; }
    public PartOfSpeech partOfSpeech { get; set; }
    public DependencyEdge dependencyEdge { get; set; }
    public string lemma { get; set; }
}

public class RootObject
{
    public List<Sentence> sentences { get; set; }
    public List<Token> tokens { get; set; }
    public string language { get; set; }
}
}